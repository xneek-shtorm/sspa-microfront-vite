import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


import { registerApplication, start } from 'single-spa'

const mifeAModule = '@learnSspa/mifeA';

registerApplication({
    name: 'mifeA',
    app: () => import(/* @vite-ignore */ mifeAModule),
    activeWhen: '/mifea'
});
start();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
