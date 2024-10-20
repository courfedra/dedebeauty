import productos from "../../assets/products/products.json"
import { useParams } from "react-router-dom"
import { useContext,useState,useEffect } from "react";
import "./mostrarProductoDetalle.css";
import { ProductoDetalle } from "./ProductoDetalle";
import { ContextVariables } from "../ContextVariables";

export const MostrarProductoDetalle=()=>{
    const [productoEncontrado,setProductoEncontrado] = useState()
    const {datos}=useContext(ContextVariables);
    let { IdProducto } = useParams();
    let Item = datos.find((e)=>{
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