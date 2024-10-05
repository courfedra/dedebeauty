import "./CRUD.css"
import { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CategoriesList } from "../../functions/Functions";
import { ContextVariables } from "../../ContextVariables";
export const DeleteProduct=()=>{
    const {user} = useAuth0()
    const {listCategories}=useContext(ContextVariables);
    let prods = listCategories.filter((e)=>e.vendedor==user.nickname)
    return(
        <div className="delete-product">
            {prods.map((e)=>{
                return(
                    <div className="product-line">
                        <div className="product-info">
                            <p>{e.marca}</p>
                            <p>{e.nombre}</p>
                            <p>{e.stock}</p>
                        </div>
                        <button onClick={()=>{alert("¡Eliminate!")}} className="btn-delete"><span>🞬</span></button>
                    </div>
                )
            })}
        </div>
    )
}