import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Layout from './component/Layout/Layout'
import { Children } from 'react'
import About from './component/About/About'
import Protfilo from './component/PROTFILO/Protfilo'
import Contact from './component/Contact/Contact'


let routers = createBrowserRouter([
  {path:'', element:<Layout/>  , children:[
    {index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'Protfilo' , element:<Protfilo/>},
    {path:'Contact' , element:<Contact/>}
  ]
  }
])



function App() {
  return <RouterProvider router={routers}>
  </RouterProvider>
}

export default App
