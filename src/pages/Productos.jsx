import productos from "../assets/products/products.json"
import bannerMadre from "../assets/dedeBeautyBannerOfertaMadre.jpg"
import "./productos.css"
import { MostrarProductoCompleto } from "../components/productos/MostrarProductoCompleto";

export const Productos = () => {
    return(
        <section className="section-productos">
            <div className="banner-products">
                <img src={bannerMadre} alt="bannerMadre"/>
            </div>
            <div className="categories-products-section">
                <div className="categories-products">
                    <ul>
                        <li>Categoria</li>
                        <li>Categoria</li>
                        <li>Categoria</li>
                        <li>Categoria</li>
                        <li>Categoria</li>
                        <li>Categoria</li>
                    </ul>
                </div>
                <div className="productos">
                    {productos.map((e)=>{
                        return(<MostrarProductoCompleto producto={e} />)
                    })
                    }
                </div>
            </div>
        </section>
    )
}

