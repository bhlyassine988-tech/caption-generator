'use client'

import { useState } from 'react';

export default function CaptionGenerator() {
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [tone, setTone] = useState('casual');
  const [length, setLength] = useState('medium');
  const [includeHashtags, setIncludeHashtags] = useState(true);
  const [includeEmojis, setIncludeEmojis] = useState(true);
  const [captions, setCaptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateCaptions = async () => {
    if (!content.trim()) {
      setError('Please describe your content first');
      return;
    }

    setLoading(true);
    setError('');
    setCaptions([]);

    try {
      const response = await fetch('/api/generate-caption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          platform,
          tone,
          length,
          includeHashtags,
          includeEmojis,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate captions');
      }

      setCaptions(data.captions);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (caption: string) => {
    try {
      await navigator.clipboard.writeText(caption);
      // You can add a toast notification here
      console.log('Caption copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Content Description Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Describe Your Content</h2>
        <p className="text-gray-600">Tell us what you're posting about</p>
        
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Describe your content, post, or what you want to share with your audience..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Customization Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Customize Your Caption</h2>
        <p className="text-gray-600">Choose platform, tone, and style preferences</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Platform */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <select 
              value={platform} 
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="TikTok">TikTok</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
            <select 
              value={tone} 
              onChange={(e) => setTone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="casual">Casual & Friendly</option>
              <option value="professional">Professional</option>
              <option value="witty">Witty & Humorous</option>
              <option value="inspirational">Inspirational</option>
              <option value="storytelling">Storytelling</option>
            </select>
          </div>

          {/* Length */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Length</label>
            <select 
              value={length} 
              onChange={(e) => setLength(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="short">Short (1-2 sentences)</option>
              <option value="medium">Medium (3-4 sentences)</option>
              <option value="long">Long (paragraph+)</option>
            </select>
          </div>

          {/* Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeHashtags}
                  onChange={(e) => setIncludeHashtags(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">Include hashtags</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeEmojis}
                  onChange={(e) => setIncludeEmojis(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">Include emojis</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center">
        <button
          onClick={generateCaptions}
          disabled={loading || !content.trim()}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 text-lg font-semibold"
        >
          {loading ? 'Generating...' : 'Generate Captions'}
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Generated Captions */}
      {captions.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Generated Captions</h3>
          <div className="grid grid-cols-1 gap-4">
            {captions.map((caption, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-gray-500">Option {index + 1}</span>
                  <button
                    onClick={() => copyToClipboard(caption)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-gray-900 whitespace-pre-wrap">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
