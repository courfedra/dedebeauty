import { Link } from "react-router-dom";
import { CategoriesList } from "./Functions"
export const ShowCategories=({prod})=>{
    let list=CategoriesList(prod);
    return(
        <ul>
            {list.map((e)=>{
                return(
                    <li key={list.indexOf(e)}>
                        <Link to={`/categoria/${e}`}>{e}</Link>
                    </li>
                )
            })}
        </ul>
    )
}