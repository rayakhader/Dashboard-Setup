import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import i18n from './locales/i18n.ts';
import './locales/i18n'

const lang = localStorage.getItem('lang') || 'en';
i18n.changeLanguage(lang)
document.dir = lang==='en'? 'ltr': 'rtl'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
