import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAuthToken(): string | null {
  return localStorage.getItem('authToken');
}

export function getUserLocale(): string {
  return localStorage.getItem('lang') || navigator.language || 'en-US';
}

