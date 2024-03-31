import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import Page from './components/Page';
import Login from './components/Login';
import Reg from './components/Reg';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path:"/",
        element: <Page></Page>
      },
      {
        path: "/login",
        element: <Login></Login>
      }, {
        path: "/reg",
        element: <Reg></Reg>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
