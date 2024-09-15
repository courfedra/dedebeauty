import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, useContext } from "react";
import { ContextVariables } from "../ContextVariables";
import { MostrarProductoLista } from "../productos/MostrarProductoLista";
import "./dashboard.css";
import { useParams } from "react-router-dom";
export const Dashboard=()=>{
    const [productoPerfil,setProductoPerfil] = useState([])
    const {user,isAuthenticated,isLoading} = useAuth0()
    const {listCategories, actualizarListCategories,reiniciarListCategories}=useContext(ContextVariables);

    const IdPerfil=useParams()
    const CargarData=()=>{
        return(
            productoPerfil.map((e)=>{
                return(<MostrarProductoLista producto={e}/>)
            })
        )
    }
    let prods = listCategories.filter((e)=>e.vendedor==user.nickname)
    useEffect(()=>{
        setProductoPerfil(prods)
        CargarData()
    },[])

    return(
        !isAuthenticated
            ?<h1>Cargando perfil</h1>
            :<div className="profile-container">
                <div className="profile-menu">
                    <ul>
                        <li>Ver Productos</li>
                        <li>Ventas</li>
                        <li>Compras</li>
                        <li>Ajustes</li>
                    </ul>
                </div>
                <div className="profile-show">
                    {CargarData()}
                </div>
            </div>

    )
}