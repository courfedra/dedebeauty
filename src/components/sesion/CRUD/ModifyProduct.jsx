import "./CRUD.css"
import { useContext,useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Render from "react-dom"
import { ContextVariables } from "../../ContextVariables";
export const ModifyProduct=()=>{
    const {user} = useAuth0()
    const {listCategories}=useContext(ContextVariables);
    let prods = listCategories.filter((e)=>e.vendedor==user.nickname)
    const [idPopUp,setIdPopUp]=useState(1000)
    const [prodPopUp,setProdPopUp]=useState(prods[0])
    const [showPopUp,setShowPopUp]=useState('popUpHidden')

    useEffect(() => {
        setProdPopUp(AbrirPopUp(idPopUp))
        PopUpUpdate()
    },[idPopUp]);

    const AbrirPopUp=(id)=>{
        return prods.find((e)=>e.id==id)
    }
    const PopUpUpdate=()=>{
        return(
            prodPopUp
            &&<div className={showPopUp}>
                <button className="btn-close-popup" onClick={()=>setShowPopUp('popUpHidden')}>Cerrar</button>
                <form>
                    <div className="infoPopUp">
                        <div className="popUpMiniBox">
                            <label for="marca">Marca
                                <input type="text" placeholder={prodPopUp.marca} id ="marca" name="marca"/>
                            </label>
                            <label for="nombre">Nombre
                                <input type="text" placeholder={prodPopUp.nombre} id ="nombre" name="nombre"/>
                            </label>
                            <label for="precio">Precio
                                <input type="text" placeholder={prodPopUp.precio} id ="precio" name="precio"/>
                            </label>
                            <label for="stock">stock
                                <input type="text" placeholder={prodPopUp.stock} id ="stock" name="stock"/>
                            </label>
                            <label for="status">status
                                <input type="text" placeholder={prodPopUp.status} id ="status" name="status"/>
                            </label>
                            <label for="nombre">categorie
                                <input type="text" placeholder={prodPopUp.categorie} id ="categorie" name="categorie"/>
                            </label>
                        </div>
                        <div className="popUpMiniBox">
                            <label for="descripcion">Descripcion
                                <textarea type="text" placeholder={prodPopUp.descripcion} id ="descripcion" name="descripcion"/>
                            </label>
                            <label for="foto">Foto
                                <input type="text" placeholder={prodPopUp.foto} id ="foto" name="foto"/>
                            </label>
                            <label for="hayDescuento">Hay Descuento
                                <input type="text" placeholder={prodPopUp.descuento.hayDescuento?'True':'False'} id ="hayDescuento" name="hayDescuento"/>
                            </label>
                            <label for="totalDescuento">Total Descuento
                                <input type="text" placeholder={prodPopUp.descuento.totalDescuento} id ="totalDescuento" name="totalDescuento"/>
                            </label>
                        </div>
                    </div>
                </form>
                <button
                    className="btn-save-info"
                    onClick={()=>{
                        setShowPopUp('popUpHidden');
                        alert('Modificado');
                    }}>
                    Modificar
                </button>
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
                                <div className="minibox-date">
                                    <p>ID: {e.id}</p>
                                </div>
                            </div>
                            <button
                                className="btn-update"
                                onClick={()=>{
                                    setIdPopUp(e.id);
                                    setShowPopUp('popUpAbsolute');
                                    }}>
                                Modificar
                                <span>
                                    🢂
                                </span>
                            </button>
                        </div>
                    )
                })}
                <div className="popUpBox">
                    {PopUpUpdate()}
                </div>
            </div>
        </>
    )
}