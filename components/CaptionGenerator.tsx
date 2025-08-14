'use client'

import { useState } from 'react'
import { Copy, RefreshCw, Heart, Download, Sparkles, Image as ImageIcon, Link as LinkIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useCaptionStore } from '@/stores/captionStore'

export default function CaptionGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [inputMethod, setInputMethod] = useState<'text' | 'image' | 'url'>('text')
  
  const {
    content,
    setContent,
    platform,
    setPlatform,
    tone,
    setTone,
    length,
    setLength,
    includeHashtags,
    setIncludeHashtags,
    includeEmojis,
    setIncludeEmojis,
    captions,
    generateCaptions,
    regenerateCaptions,
    favoriteCaption,
    copyCaption
  } = useCaptionStore()

  const handleGenerate = async () => {
    if (!content.trim()) {
      toast.error('Please describe your content first')
      return
    }

    setIsGenerating(true)
    try {
      await generateCaptions()
      toast.success('Captions generated successfully!')
    } catch (error) {
      toast.error('Failed to generate captions. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRegenerate = async () => {
    setIsGenerating(true)
    try {
      await regenerateCaptions()
      toast.success('New captions generated!')
    } catch (error) {
      toast.error('Failed to regenerate captions. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
      {/* Input Section */}
      <div className="card">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Describe Your Content</h2>
          <p className="text-gray-600">Tell us what you're posting about or upload an image for AI analysis</p>
        </div>

        {/* Input Method Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          <button
            onClick={() => setInputMethod('text')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              inputMethod === 'text'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Sparkles className="w-4 h-4 inline mr-2" />
            Text Description
          </button>
          <button
            onClick={() => setInputMethod('image')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              inputMethod === 'image'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ImageIcon className="w-4 h-4 inline mr-2" />
            Upload Image
          </button>
          <button
            onClick={() => setInputMethod('url')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              inputMethod === 'url'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <LinkIcon className="w-4 h-4 inline mr-2" />
            URL Input
          </button>
        </div>

        {/* Input Fields */}
        {inputMethod === 'text' && (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe your content, post, or what you want to share with your audience..."
            className="input-field h-32 resize-none"
          />
        )}

        {inputMethod === 'image' && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Drop your image here or click to browse</p>
            <p className="text-sm text-gray-500">Supports JPG, PNG, GIF up to 10MB</p>
            <input type="file" accept="image/*" className="hidden" />
          </div>
        )}

        {inputMethod === 'url' && (
          <input
            type="url"
            placeholder="Paste a URL to analyze content..."
            className="input-field"
          />
        )}
      </div>

      {/* Options Section */}
      <div className="card">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Customize Your Caption</h2>
          <p className="text-gray-600">Choose platform, tone, and style preferences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Platform Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="input-field"
            >
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="tiktok">TikTok</option>
              <option value="facebook">Facebook</option>
            </select>
          </div>

          {/* Tone Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="input-field"
            >
              <option value="casual">Casual & Friendly</option>
              <option value="professional">Professional</option>
              <option value="witty">Witty & Humorous</option>
              <option value="inspirational">Inspirational</option>
              <option value="promotional">Promotional</option>
              <option value="storytelling">Storytelling</option>
            </select>
          </div>

          {/* Length Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Length</label>
            <select
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="input-field"
            >
              <option value="short">Short (1-2 sentences)</option>
              <option value="medium">Medium (3-4 sentences)</option>
              <option value="long">Long (paragraph+)</option>
            </select>
          </div>

          {/* Additional Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeHashtags}
                  onChange={(e) => setIncludeHashtags(e.target.checked)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">Include hashtags</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeEmojis}
                  onChange={(e) => setIncludeEmojis(e.target.checked)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700">Include emojis</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center">
        <button
          onClick={handleGenerate}
          disabled={isGenerating || !content.trim()}
          className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Captions
            </>
          )}
        </button>
      </div>

      {/* Results Section */}
      {captions.length > 0 && (
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Generated Captions</h2>
            <button
              onClick={handleRegenerate}
              disabled={isGenerating}
              className="btn-secondary inline-flex items-center"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Regenerate
            </button>
          </div>

          <div className="space-y-4">
            {captions.map((caption, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500">Option {index + 1}</span>
                    <span className="text-xs text-gray-400">
                      {caption.text.length} characters
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => favoriteCaption(index)}
                      className={`p-2 rounded-lg transition-colors ${
                        caption.isFavorite
                          ? 'text-red-500 hover:text-red-600'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${caption.isFavorite ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => copyCaption(index)}
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-900 leading-relaxed mb-3">{caption.text}</p>
                {caption.hashtags && caption.hashtags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {caption.hashtags.map((hashtag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {hashtag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
         </div>
       )}
      </div>
    </div>
   )
 }
