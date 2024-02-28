import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './Index.jsx'
import Banner from './Components/Banner/Banner.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
    children: [
      {
        path: "/",
        element : <Banner></Banner>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
      <Index/>
    </RouterProvider>
  </React.StrictMode>,
)
