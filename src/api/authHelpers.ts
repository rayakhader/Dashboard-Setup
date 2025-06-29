
export function getAuthToken(): string | null {
  return localStorage.getItem('authToken');
}

export function getUserLocale(): string {
  return localStorage.getItem('lang') || navigator.language || 'en-US';
}
