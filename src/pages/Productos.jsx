import productos from "../assets/products/products.json"
import "./productos.css"
import { MostrarProductoCompleto } from "../components/productos/MostrarProductoCompleto";

export const Productos = () => {
    return(
        <section className="productos">
            {productos.map((e)=>{
                return(<MostrarProductoCompleto producto={e} />)
            })
            }
        </section>
    )
}

