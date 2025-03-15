import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Blogs from './pages/Blogs.jsx'

const router = createBrowserRouter([
    {
       path: "/",
       element: <App/>
    },
    {
       path: "/about",
       element:<About/>
    },
    {
       path:"/blogs",
       element:<Blogs/>
    }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
