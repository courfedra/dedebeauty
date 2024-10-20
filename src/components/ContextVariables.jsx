import { createContext,useState,useEffect } from "react";
import productos from "../assets/products/products.json"
import { db, agregarProductoFirebase, modificarProductosFirebase } from "../utils/firebaseConfig";
import { collection, getDocs,query,addDoc} from "firebase/firestore";

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
        let aux=prod.filter((e)=>e.hayDescuento==true)
        setListCategories(aux)
    }

//configurado a firebase

    const [datos,setDatos]=useState([])
    //agregar productos a firestore
    const agregarProducto = (datosNuevos) => {
        console.log('Agregando')
        agregarProductoFirebase(datosNuevos)
        console.log('Agregado')
    }
    //modificar producto en firestore
    const modificarProducto = (datosNuevos) =>{
        console.log("Modificando")
        modificarProductosFirebase(datosNuevos)
        console.log('modificado')
    }

    //componentDidMount
    useEffect(()=>{
        const dbAsync= async()=>{
            //para cambiar categorias
            let q=query(collection(db, "productos"))
            const querySnapshot = await getDocs(q);
            //metodo "docs" convierte array de documentos a array de objetos
            const dataFromFirestone = querySnapshot.docs.map(item=>({
                id:item.id,
                ...item.data()
            }))
            return dataFromFirestone;
        }
        dbAsync()
            .then(result=>setDatos(result))
            .catch(err=>console.log(err))
    },[]);

return(
    <ContextVariables.Provider
        value={{
            datos,
            agregarProducto,
            modificarProducto,
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