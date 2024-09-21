import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, useContext } from "react";
import { ContextVariables } from "../ContextVariables";
import { MostrarProductoLista } from "../productos/MostrarProductoLista";
import "./dashboard.css";
import { Link, useParams } from "react-router-dom";
import { CreateProduct } from "./CRUD/createProduct";
export const Dashboard=()=>{
    const [productoPerfil,setProductoPerfil] = useState([])
    const [option,setOption] = useState('')
    const {user,isAuthenticated,isLoading} = useAuth0()
    const {listCategories, actualizarListCategories,reiniciarListCategories}=useContext(ContextVariables);

    const IdPerfil=useParams()
    const CargarData=()=>{
        return(
            option==''
            ?productoPerfil.map((e)=>{
                return(<MostrarProductoLista producto={e}/>)
            })
            :<h1>Hola</h1>
        )
    }
    let prods = listCategories.filter((e)=>e.vendedor==user.nickname)
    useEffect(()=>{
        setProductoPerfil(prods)
        CargarData()
        console.log("entre useEffect")
    },[option])

    return(
        !isAuthenticated
            ?<h1>Cargando perfil</h1>
            :<div className="profile-container">
                <div className="profile-menu">
                    <ul>
                        <li onClick={()=>{setOption('')}}>Ver Productos</li>
                        <li onClick={()=>{setOption('agregar')}}>Agregar Producto</li>
                        <li onClick={()=>{setOption('quitar')}}>Quitar producto</li>
                        <li onClick={()=>{setOption('modificar')}}>Modificar producto</li>
                    </ul>
                </div>
                <div className="profile-show">
                    <div className="profile-show-cards">
                        {CargarData()}
                    </div>
                </div>
            </div>

    )
}