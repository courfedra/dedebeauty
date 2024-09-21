import productos from "../../assets/products/products.json"
import { useParams } from "react-router-dom"
import {MostrarProductoLista} from "./MostrarProductoLista"
import { ShowBoxCategories } from "../functions/ShowBoxCategories"
import "./mostrarCategoriasProductos.css"
import BannerCategories from "../../assets/BeFreedomDedeBeauty.jpg"

export const MostrarCategoriasProducto=()=>{
    let { IdCategoria } = useParams();
    const prods = productos.filter((e)=>e.categorie==IdCategoria);
    return(
        <div className="categories-container">
            <div className="categories-banner">
                <img src={BannerCategories} alt="banner categories"/>
            </div>
            <div className="categories-categories">
                <div className="categories-products">
                    <ShowBoxCategories prod={productos}/>
                </div>
            </div>
            <div className="categories-products">
                <div className="categories-products-cards">
                    {prods.map((e)=>{
                        return(<MostrarProductoLista producto={e}/>)
                    })}
                </div>
            </div>
        </div>
    )
}