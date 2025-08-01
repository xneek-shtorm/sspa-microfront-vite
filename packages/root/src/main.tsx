import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


import { registerApplication, start } from 'single-spa'

const app1Module = '@my-org/app1';
const kit = '@my-org/ui-kit';

import(/* @vite-ignore */ kit);

registerApplication({
    name: 'app1',
    app: () => import(/* @vite-ignore */ app1Module),
    activeWhen: '/app1'
});
start();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
