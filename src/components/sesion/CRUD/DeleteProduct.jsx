import "./CRUD.css"
import { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CategoriesList } from "../../functions/Functions";
import { ContextVariables } from "../../ContextVariables";
export const DeleteProduct=()=>{
    const {user} = useAuth0()
    const {listCategories}=useContext(ContextVariables);
    let prods = listCategories.filter((e)=>e.vendedor==user.nickname)
    prods.map((e)=>{
        console.log(e.marca)
    })
}