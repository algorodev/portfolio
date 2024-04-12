import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import './styles/index.scss'
import './i18n.ts'

const rootElement: HTMLElement = document.getElementById('root')!

createRoot(rootElement).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
