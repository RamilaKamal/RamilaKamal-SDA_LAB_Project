import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ShopContectProvider from "./context/ShopContext"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContectProvider>
      <App />
    </ShopContectProvider>
  </BrowserRouter>
)
