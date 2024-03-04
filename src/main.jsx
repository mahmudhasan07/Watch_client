import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import Index from './Index.jsx'
import HomePart from './Components/Home/HomePart.jsx'
import AddItems from './Components/AddItems/AddItems.jsx'
import "./locomotive-scroll.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
    children: [
      {
        path: "/",
        element: <HomePart></HomePart>
      },
      {
        path : "/Added-Watches",
        element : <AddItems></AddItems>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router}>
        <App />
        {/* <Index></Index> */}
      </RouterProvider>
    </ParallaxProvider>
  </React.StrictMode>,
)
