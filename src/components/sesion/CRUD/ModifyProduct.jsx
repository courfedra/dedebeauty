import "./CRUD.css"
import { useContext, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Render from "react-dom"
import { ContextVariables } from "../../ContextVariables";
export const ModifyProduct=()=>{
    const {user} = useAuth0()
    const {listCategories}=useContext(ContextVariables);
    let prods = listCategories.filter((e)=>e.vendedor==user.nickname)
    useEffect(()=>{

    },[])
    const AbrirPopUp=(id)=>{
        let productoUpdate = prods.find((e)=>e.id==id)
        PopUpupdate(productoUpdate)
    }
    const PopUpupdate=(e)=>{
        console.log("abierto popup con e de valor: ")
        console.log(e)
        return(
            <div className="popUpAbsolute">
                <div>
                    <p>{e.marca}</p>
                    <p>{e.nombre}</p>
                    <p>{e.descripcion}</p>
                    <p>{e.foto}</p>
                    <p>{e.precio}</p>
                    <p>{e.descuento.hayDescuento}</p>
                    <p>{e.descuento.totalDescuento}</p>
                    <p>{e.stock}</p>
                    <p>{e.status}</p>
                    <p>{e.categorie}</p>
                </div>
                <button>Modificar</button>
            </div>
        )
    }
    return(
        <>
            <div className="update-product">
                {prods.map((e)=>{
                    return(
                        <div className="product-line">
                            <div className="product-info">
                                <div className="minibox-date">
                                    <p>{e.marca}</p>
                                </div>
                                <div className="minibox-date">
                                    <p>{e.nombre}</p>
                                </div>
                                <div className="minibox-date">
                                    <p>${e.precio}</p>
                                </div>
                            </div>
                            <button
                                className="btn-update"
                                onClick={()=>{AbrirPopUp(e.id)}}>
                                Modificar
                                <span>
                                    🢂
                                </span>
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}