import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom" ;
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home';
import Compare from './pages/compare/Compare';
import TechSpace from './pages/TechSpace/TechSpace';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/TechSpace",
    element: <TechSpace/>  ,
    errorElement: <ErrorPage/>,
  },
   {
     path: "/Compare",
     element: <Compare/>
  },
],);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
