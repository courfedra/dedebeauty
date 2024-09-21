import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, useContext } from "react";
import { ContextVariables } from "../ContextVariables";
import { MostrarProductoLista } from "../productos/MostrarProductoLista";
import "./dashboard.css";
import { Link, useParams } from "react-router-dom";
import { CreateProduct } from "./CRUD/createProduct";
import { DeleteProduct } from "./CRUD/DeleteProduct";
import { ModifyProduct } from "./CRUD/ModifyProduct";
export const Dashboard=()=>{
    const [productoPerfil,setProductoPerfil] = useState([])
    const [option,setOption] = useState('cargar')
    const {user,isAuthenticated,isLoading} = useAuth0()
    const {listCategories, actualizarListCategories,reiniciarListCategories}=useContext(ContextVariables);

    const IdPerfil=useParams()
    const CargarData=()=>{
            switch (option) {
                case 'cargar':
                    return(
                        productoPerfil.map((e)=>{
                            return(<MostrarProductoLista producto={e}/>)
                        })
                    )
                    break;
                case 'agregar':
                    return(<CreateProduct/>);
                    break;
                case 'quitar':
                    return(<DeleteProduct/>);
                    break;
                case 'modificar':
                    return(<ModifyProduct/>);
                    break;
            }
    }


    let prods = listCategories.filter((e)=>e.vendedor==user.nickname)
    useEffect(()=>{
        setProductoPerfil(prods)
        CargarData()
    },[option])

    return(
        !isAuthenticated
            ?<h1>Cargando perfil</h1>
            :<div className="profile-container">
                <div className="profile-menu">
                    <ul>
                        <li onClick={()=>{setOption('cargar')}}>Ver Productos</li>
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