import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { 
      content, 
      platform = 'Instagram', 
      tone = 'casual', 
      length = 'medium',
      includeHashtags = true,
      includeEmojis = true 
    } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: 'Content description is required' }, 
        { status: 400 }
      );
    }

    // Create the prompt based on user preferences
    const prompt = createPrompt(content, platform, tone, length, includeHashtags, includeEmojis);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4" for better quality
      messages: [
        {
          role: "system",
          content: "You are a social media expert that creates engaging captions for different platforms."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 300,
      temperature: 0.8, // Higher for more creativity
      n: 3, // Generate 3 variations
    });

    const captions = completion.choices.map(choice => choice.message.content?.trim() || '');

    return NextResponse.json({ 
      success: true, 
      captions,
      usage: completion.usage 
    });

  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate caption',
        message: error.message 
      }, 
      { status: 500 }
    );
  }
}

function createPrompt(content: string, platform: string, tone: string, length: string, includeHashtags: boolean, includeEmojis: boolean): string {
  let prompt = `Create a ${tone} ${platform} caption about: ${content}\n\n`;
  
  // Add length specifications
  const lengthSpecs: Record<string, string> = {
    'short': '1-2 sentences',
    'medium': '3-4 sentences', 
    'long': '1-2 paragraphs'
  };
  
  prompt += `Length: ${lengthSpecs[length] || 'medium length'}\n`;
  
  // Add tone specifications
  const toneSpecs: Record<string, string> = {
    'casual': 'conversational and friendly',
    'professional': 'polished and business-appropriate',
    'witty': 'clever and humorous',
    'inspirational': 'motivating and uplifting',
    'storytelling': 'narrative and engaging'
  };
  
  prompt += `Tone: ${toneSpecs[tone] || 'engaging'}\n`;
  
  // Platform-specific instructions
  const platformSpecs: Record<string, string> = {
    'Instagram': 'engaging and visual-focused',
    'Twitter': 'concise and trending',
    'LinkedIn': 'professional and networking-focused',
    'TikTok': 'trendy and youth-oriented'
  };
  
  prompt += `Platform: ${platform} - make it ${platformSpecs[platform] || 'engaging'}\n`;
  
  // Add hashtag and emoji preferences
  if (includeHashtags) {
    prompt += `Include relevant hashtags (3-5 hashtags)\n`;
  }
  
  if (includeEmojis) {
    prompt += `Include appropriate emojis\n`;
  }
  
  prompt += `\nGenerate an engaging caption that would encourage likes, comments, and shares.`;
  
  return prompt;
}
