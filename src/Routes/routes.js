import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Services from "../Pages/Services/Services";
import AboutMe from "../Pages/AboutMe/AboutMe";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
         {path:'/',
       element: <Home></Home>}
    ]
    },
   
    {
        path: 'contact',
        element:<ContactMe></ContactMe>,
    //     children:[
    //      {path:'/',
    //    element: <Home></Home>}
    // ]
    },
    {
        path: 'services',
        element:<Services></Services>,
    //     children:[
    //      {path:'/',
    //    element: <Home></Home>}
    // ]
    },
    {
        path: 'aboutme',
        element:<AboutMe></AboutMe>,
    //     children:[
    //      {path:'/',
    //    element: <Home></Home>}
    // ]
    }
    // {
    //     path: '/',
    //     element:<Main></Main>,
    //     children:[
    //      {path:'/',
    //    element: <Home></Home>}
    // ]
    // }
])