import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Products from './pages/Products.jsx';
import ProductListing from './pages/ProductListing.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:productName/:productId",
    element: <ProductListing />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
