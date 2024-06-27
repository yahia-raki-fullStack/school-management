import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";

export const router = createBrowserRouter([
{
  element:<Layout/>,
  children:[ 
       {
  path : '/',
  element:<Home/> 
},
{
  path : '/register',
  element: <Register/>,
 
},
{
  path : '/login',
  element: <Login/>,
 
},
{
  path : '/users',
  element: <Users/>,
 
},
{
  path : '*',
  element: <NotFound/>,
 
}
]
}
  ]);