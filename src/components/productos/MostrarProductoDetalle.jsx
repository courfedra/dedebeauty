import productos from "../../assets/products/products.json"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import "./mostrarProductoDetalle.css";
import { ProductoDetalle } from "./ProductoDetalle";

export const MostrarProductoDetalle=()=>{
    const [productoEncontrado,setProductoEncontrado] = useState()
    let { IdProducto } = useParams();
    let Item = productos.find((e)=>{
        return e.id==IdProducto
    })
    useEffect(()=>{
        setProductoEncontrado(Item)
    },[Item])
        return(
            productoEncontrado
            ?<ProductoDetalle producto={productoEncontrado}/>
            :<p>Loading</p>
    )
}