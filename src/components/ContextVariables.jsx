import { createContext,useState } from "react";
import productos from "../assets/products/products.json"

export const ContextVariables = createContext();

const ContextVariablesProvider = ({children}) =>{
    const [listCategories,setListCategories]=useState([])
    //vuelve a llenar el listCategories con todos los productos del json
    const reiniciarListCategories=(()=>{
        setListCategories(productos)
    })
    //Devuelve todo slos productos que esten dentro de la categoria seleccionara
    const actualizarListCategories=(prod,cat)=>{
        let aux = prod.filter((e)=>e.categorie==cat);
        setListCategories(aux)
    }
    //devuelve los productos que tienen oferta TRUE
    const mostrarOfertas=(prod)=>{
        let aux=prod.filter((e)=>e.descuento.hayDescuento==true)
        setListCategories(aux)
    }
    const agregarProducto=(prod)=>{
        console.log(listCategories, "antes de cargar")
        setListCategories(
            ...listCategories,
            prod
        )
        console.log(listCategories, "despues de cargar")
    }

return(
    <ContextVariables.Provider
        value={{
            agregarProducto,
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