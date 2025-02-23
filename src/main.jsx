import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { StateProvider } from "./context"

import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>


    </StateProvider>
  </StrictMode>

)
