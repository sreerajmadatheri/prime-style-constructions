import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/[^\d+()-\s]/g, '')
}

export function absoluteUrl(path: string, baseUrl: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl.replace(/\/$/, '')}${normalizedPath}`
}
