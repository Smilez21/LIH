import './App.css'
import About from './pages/about';
import Careers from './pages/careers';
import Landing from './pages/landing';
import Contact from './pages/contact'
import Program from './pages/program';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Landing/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/careers",
      element:<Careers/>
    },
    {
      path:"/program",
      element:<Program/>
    },
  
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
