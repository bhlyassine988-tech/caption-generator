import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCharacterCount(text: string): string {
  return `${text.length} characters`
}

export function getPlatformLimits(platform: string): { maxLength: number; recommendedLength: number } {
  const limits = {
    instagram: { maxLength: 2200, recommendedLength: 125 },
    twitter: { maxLength: 280, recommendedLength: 200 },
    linkedin: { maxLength: 3000, recommendedLength: 150 },
    tiktok: { maxLength: 150, recommendedLength: 100 },
    facebook: { maxLength: 63206, recommendedLength: 200 }
  }
  
  return limits[platform as keyof typeof limits] || limits.instagram
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + '...'
}

export function generateRandomId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
