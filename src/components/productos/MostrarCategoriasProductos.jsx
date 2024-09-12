import productos from "../../assets/products/products.json"
import { useParams } from "react-router-dom"
import {MostrarProductoLista} from "./MostrarProductoLista"
import { ShowCategories } from "../functions/showCategories"
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
                <ShowCategories prod={productos}/>
            </div>
            <div className="categories-products">
            {prods.map((e)=>{
                return(<MostrarProductoLista producto={e}/>)
            })}
            </div>
        </div>
    )
}