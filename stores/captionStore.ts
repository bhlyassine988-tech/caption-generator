import { create } from 'zustand'

export interface Caption {
  text: string
  hashtags?: string[]
  isFavorite: boolean
  platform: string
  tone: string
  length: string
}

interface CaptionStore {
  // State
  content: string
  platform: string
  tone: string
  length: string
  includeHashtags: boolean
  includeEmojis: boolean
  captions: Caption[]
  isLoading: boolean
  
  // Actions
  setContent: (content: string) => void
  setPlatform: (platform: string) => void
  setTone: (tone: string) => void
  setLength: (length: string) => void
  setIncludeHashtags: (include: boolean) => void
  setIncludeEmojis: (include: boolean) => void
  generateCaptions: () => Promise<void>
  regenerateCaptions: () => Promise<void>
  favoriteCaption: (index: number) => void
  copyCaption: (index: number) => Promise<void>
  clearCaptions: () => void
}

// Mock AI generation function (replace with actual API call)
const generateMockCaptions = async (
  content: string,
  platform: string,
  tone: string,
  length: string,
  includeHashtags: boolean,
  includeEmojis: boolean
): Promise<Caption[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  const mockCaptions: Caption[] = [
    {
      text: generateMockCaptionText(content, platform, tone, length, includeEmojis),
      hashtags: includeHashtags ? generateMockHashtags(content, platform) : undefined,
      isFavorite: false,
      platform,
      tone,
      length
    },
    {
      text: generateMockCaptionText(content, platform, tone, length, includeEmojis),
      hashtags: includeHashtags ? generateMockHashtags(content, platform) : undefined,
      isFavorite: false,
      platform,
      tone,
      length
    },
    {
      text: generateMockCaptionText(content, platform, tone, length, includeEmojis),
      hashtags: includeHashtags ? generateMockHashtags(content, platform) : undefined,
      isFavorite: false,
      platform,
      tone,
      length
    }
  ]
  
  return mockCaptions
}

const generateMockCaptionText = (
  content: string,
  platform: string,
  tone: string,
  length: string,
  includeEmojis: boolean
): string => {
  const emojis = includeEmojis ? ['✨', '💫', '🌟', '🔥', '💯', '🎯', '🚀', '💪', '❤️', '😊'] : []
  const emoji = includeEmojis ? emojis[Math.floor(Math.random() * emojis.length)] : ''
  
  const baseText = `This is a ${tone} caption about ${content} for ${platform}. `
  
  switch (length) {
    case 'short':
      return `${emoji} ${baseText} Perfect for quick engagement!`
    case 'medium':
      return `${emoji} ${baseText} It's designed to capture attention and encourage interaction from your audience.`
    case 'long':
      return `${emoji} ${baseText} This longer format allows you to tell a more complete story, share valuable insights, and create deeper connections with your followers. It's perfect for when you want to provide real value and establish thought leadership.`
    default:
      return `${emoji} ${baseText}`
  }
}

const generateMockHashtags = (content: string, platform: string): string[] => {
  const commonHashtags = ['#socialmedia', '#content', '#marketing', '#digital', '#growth']
  const platformHashtags = {
    instagram: ['#instagram', '#instagood', '#photooftheday'],
    twitter: ['#twitter', '#tweeting', '#social'],
    linkedin: ['#linkedin', '#professional', '#business'],
    tiktok: ['#tiktok', '#viral', '#trending'],
    facebook: ['#facebook', '#social', '#community']
  }
  
  const platformSpecific = platformHashtags[platform as keyof typeof platformHashtags] || []
  const contentHashtags = content.split(' ').slice(0, 3).map(word => `#${word.toLowerCase()}`)
  
  return [...contentHashtags, ...platformSpecific, ...commonHashtags].slice(0, 8)
}

export const useCaptionStore = create<CaptionStore>((set, get) => ({
  // Initial state
  content: '',
  platform: 'instagram',
  tone: 'casual',
  length: 'medium',
  includeHashtags: true,
  includeEmojis: true,
  captions: [],
  isLoading: false,
  
  // Actions
  setContent: (content: string) => set({ content }),
  setPlatform: (platform: string) => set({ platform }),
  setTone: (tone: string) => set({ tone }),
  setLength: (length: string) => set({ length }),
  setIncludeHashtags: (include: boolean) => set({ includeHashtags: include }),
  setIncludeEmojis: (include: boolean) => set({ includeEmojis: include }),
  
  generateCaptions: async () => {
    const { content, platform, tone, length, includeHashtags, includeEmojis } = get()
    
    if (!content.trim()) {
      throw new Error('Content is required')
    }
    
    set({ isLoading: true })
    
    try {
      const newCaptions = await generateMockCaptions(
        content,
        platform,
        tone,
        length,
        includeHashtags,
        includeEmojis
      )
      
      set({ captions: newCaptions, isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },
  
  regenerateCaptions: async () => {
    const { content, platform, tone, length, includeHashtags, includeEmojis } = get()
    
    set({ isLoading: true })
    
    try {
      const newCaptions = await generateMockCaptions(
        content,
        platform,
        tone,
        length,
        includeHashtags,
        includeEmojis
      )
      
      set({ captions: newCaptions, isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },
  
  favoriteCaption: (index: number) => {
    const { captions } = get()
    const updatedCaptions = captions.map((caption, i) => 
      i === index ? { ...caption, isFavorite: !caption.isFavorite } : caption
    )
    set({ captions: updatedCaptions })
  },
  
  copyCaption: async (index: number) => {
    const { captions } = get()
    const caption = captions[index]
    
    if (caption) {
      try {
        await navigator.clipboard.writeText(caption.text)
      } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = caption.text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
    }
  },
  
  clearCaptions: () => set({ captions: [] })
}))
