import {
  RouterProvider,
  createBrowserRouter,
  Outlet
}
 from "react-router-dom"

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/products";
import Product from "./Pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './app.scss';

const Layout = ()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

 const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
    ]
  }
 ])
function App() {
  return(
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App;
