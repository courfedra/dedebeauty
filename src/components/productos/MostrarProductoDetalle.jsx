import productos from "../../assets/products/products.json"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
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
            productoEncontrado?
            <div>
                <img src={productoEncontrado.foto}/>
            </div>
            :<p>Loading</p>
    )
}