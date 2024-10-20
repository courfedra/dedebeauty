import "./showBoxCategories.css"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { ContextVariables } from "../ContextVariables";
import { CategoriesList } from "./Functions";
export const ShowBoxCategories=()=>{
    const{listCategories}=useContext(ContextVariables);
    let box=CategoriesList(listCategories)
    return(
        <div className="categories-boxes">
            {box.map((e)=>{
                return(
                    <Link to={`/categoria/${e}`} key={box.indexOf(e)}>
                        <div className="box">
                            {e}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}