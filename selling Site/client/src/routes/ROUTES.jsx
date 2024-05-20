import AboutUs from "../pages/AboutUs";
import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Products from "../pages/Products";
import Specials from "../pages/Specials";
import Testimonials from "../pages/Testimonials";

export const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/special",
                element:<Specials/>
            },
            {
                path:"/testimonials",
                element:<Testimonials/>
            },
            {
                path:"/add",
                element:<Add/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/detail/:id",
                element:<Detail/>
            },
        ]
    }
]