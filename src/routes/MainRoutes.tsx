import { useRoutes } from "react-router-dom"
import { Fotos } from "../pages/Fotos"
import { Home } from "../pages/Home"

export const MainRoutes = () =>{

    return useRoutes([
        {
         path:'/', 
         element: <Home/> 
        },
        {
         path:'/albums/:id', 
         element: <Fotos/> 
        },
    ])
}