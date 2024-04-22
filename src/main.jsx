import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Waitlist,Layout,Home,ErrorPage,Contact} from "./components"

const Router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    // errorElement:<ErrorPage/>
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"/waitlist",
      element:<Waitlist/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
)
