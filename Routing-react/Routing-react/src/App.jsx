import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import UseParam from "./components/UseParam";
import Reports from "./components/Reports";
import Courses from "./components/Courses";
import NotFound from "./NotFound";
const router = createBrowserRouter([
  {
    path: '/home',
    element:
      <div>
        <Navbar/>
        <Home/>
      </div>
  },
  {
    path: '/about',
    element:
      <div>
        <Navbar/>
        <About/>
      </div>,
    children: [
      {
        path: 'courses',
        element: <Courses/>
      },
      {
        path: 'reports',
        element: <Reports/>
      }
    ]
  },

  {
    path : '/student/:id',
    element:
    <div>
      <Navbar/>
      <UseParam/>
    </div>
  },
  {
    
    path:'*',
    element: <NotFound/>
  }

]);
function App() {
  
  return (
    
    <div>
      <RouterProvider router = {router}/>
    </div>  
  )
}

export default App
