import { createContext,useState } from "react";
import productos from "../assets/products/products.json"

export const ContextVariables = createContext();

const ContextVariablesProvider = ({children}) =>{
    const [listCategories,setListCategories]=useState([])

    const reiniciarListCategories=(()=>{
        setListCategories(productos)
    })

    const actualizarListCategories=(prod,cat)=>{
        let aux = prod.filter((e)=>e.categorie==cat);
        setListCategories(aux)
    }

    const mostrarOfertas=(prod)=>{
        let aux=prod.filter((e)=>e.descuento.hayDescuento==true)
        setListCategories(aux)
    }

return(
    <ContextVariables.Provider
        value={{
            listCategories,
            actualizarListCategories,
            reiniciarListCategories,
            mostrarOfertas,
        }}>
        {children}
    </ContextVariables.Provider>
)
}

export default ContextVariablesProvider