import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.4/dist/js/bootstrap.bundle.min.js"
import Employee from "./pages/Employee.jsx"
import EmployeeDetails from "./pages/EmployeeDetails.jsx"
import Report from "./pages/Report.jsx"

const router = createBrowserRouter([
      {
        path:'/',
        element:<App/>
      },

      {
        path:'/employee',
        element:<Employee/>
        
       },
       {
         path:"/employee/:id",
         element:<EmployeeDetails/>
       },
       {
         path:"/report",
         element:<Report/>
       }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
