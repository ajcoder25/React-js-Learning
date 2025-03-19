import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Todos from './pages/Todos.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element: <App/>
    },
    {
       path:'/todos',
       element:<Todos/>
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router = {router}/>
  </StrictMode>,
)
