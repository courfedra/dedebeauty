import productos from "../assets/products/products.json"
import bannerMadre from "../assets/dedeBeautyBannerOfertaMadre.jpg"
import "./productos.css"
import { MostrarProductoLista } from "../components/productos/MostrarProductoLista";
import { ShowCategories } from "../components/functions/showCategories";

export const Productos = () => {
    return(
        <section className="section-productos">
            <div className="banner-products">
                <img src={bannerMadre} alt="bannerMadre"/>
            </div>
            <div className="categories-products-section">
                <div className="categories-products">
                    <ShowCategories prod={productos}/>
                </div>
                <div className="productos">
                    {productos.map((e)=>{
                        return(<MostrarProductoLista key={productos.indexOf(e)} producto={e} />)
                    })
                    }
                </div>
            </div>
        </section>
    )
}

