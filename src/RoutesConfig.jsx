import {Inicio} from "./pages/Inicio"
import {Contacto} from "./pages/Contacto"
import {Nosotros} from "./pages/Nosotros"
import {Productos} from "./pages/Productos"
import {Blog} from "./pages/Blog"
import { MostrarProductoDetalle } from "./components/productos/mostrarProductoDetalle"
import { MostrarCategoriasProducto } from "./components/productos/MostrarCategoriasProductos"
export const NavbarMenu = [
    {
        path: "/",
        element: <Inicio />,
        name:"Inicio",
    },
    {
        path: "/contacto",
        element: <Contacto />,
        name: "Contacto",
    },
    {
        path: "/nosotros",
        element: <Nosotros />,
        name: "Nosotros",
    },
    {
        path: "/productos",
        element: <Productos />,
        name: "Productos",
    },
    {
        path:"/:IdProducto",
        element:<MostrarProductoDetalle/>
    },
    {
        path:"/categoria/:IdCategoria",
        element:<MostrarCategoriasProducto/>
    },
]
