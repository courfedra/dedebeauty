import "./CRUD.css"
import { useContext,useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ContextVariables } from "../../ContextVariables";
import { storage } from "../../../utils/firebaseConfig";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
export const ModifyProduct=()=>{
    const {user} = useAuth0()
    const {datos,modificarProducto}=useContext(ContextVariables);
    let prods = datos.filter((e)=>e.vendedor==user.nickname)
    const [idPopUp,setIdPopUp]=useState(1000)
    const [prodPopUp,setProdPopUp]=useState({})
    const [showPopUp,setShowPopUp]=useState('popUpHidden')
    const [datosImg,setDatosImg]=useState({})
    useEffect(() => {
        setProdPopUp(AbrirPopUp(idPopUp))
        PopUpUpdate()
    },[idPopUp]);

    const AbrirPopUp=(id)=>{
        return prods.find((e)=>e.id==id)
    }

    const actualizarNuevaInfo=()=>{
        if(document.getElementById('marca').value!=''){prodPopUp.marca=document.getElementById('marca').value}
        if(prodPopUp.nombre=document.getElementById('nombre').value!=''){prodPopUp.nombre=document.getElementById('nombre').value}
        if(prodPopUp.precio=document.getElementById('precio').value!=''){prodPopUp.precio=document.getElementById('precio').value}
        if(prodPopUp.stock=document.getElementById('stock').value!=''){prodPopUp.stock=document.getElementById('stock').value}
        if(prodPopUp.status=document.getElementById('status').value!=''){prodPopUp.status=document.getElementById('status').value}
        if(prodPopUp.categorie=document.getElementById('categorie').value!=''){prodPopUp.categorie=document.getElementById('categorie').value}
        if(prodPopUp.descripcion=document.getElementById('descripcion').value!=''){prodPopUp.descripcion=document.getElementById('descripcion').value}
        if(document.getElementById('descuento').value!=''){prodPopUp.hayDescuento=document.getElementById('descuento').value!=''?true:false}
        if(document.getElementById('descuento').value!=''){prodPopUp.totalDescuento=document.getElementById('descuento').value!=''&&parseFloat(document.getElementById('descuento').value)}
        if(prodPopUp.vendedor=user.nickname!=''){prodPopUp.vendedor=user.nickname}
    }

    const CargarDatos = async (e) => {
        e.preventDefault()
        actualizarNuevaInfo()
        const result = await cargarImg(datosImg.archivo,datosImg.nombreArchivo,datosImg.creadorArchivo)
        prodPopUp.foto = await getDownloadURL(ref(storage,`imagenes-productos/${datosImg.creadorArchivo}/${datosImg.nombreArchivo}`))
        console.log(prodPopUp)
        modificarProducto(prodPopUp)
    }
    const cargarImg= async (file,fileName,route)=>{
        const storageRef = ref(storage, `imagenes-productos/${route}/${fileName}`);
        return await uploadBytes(storageRef,file)
    }

    const PopUpUpdate=()=>{
        return(
            prodPopUp
            &&<div className={showPopUp}>
                <button
                    className="btn-close-popup"
                    onClick={()=>{
                        setShowPopUp('popUpHidden')
                        setProdPopUp([])
                    }}>Cerrar</button>
                <form onSubmit={CargarDatos}>
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
                                <input
                                    type="file"
                                    onChange={()=>{
                                        setDatosImg({
                                            'archivo':document.getElementById('foto').files[0],
                                            'nombreArchivo':document.getElementById('foto').files[0].name,
                                            'creadorArchivo':user.nickname
                                        })
                                    }}
                                    id ="foto"
                                    name="foto"/>
                            </label>
                            {
                                prodPopUp.hayDescuento
                                ?<label for="totalDescuento">Total Descuento
                                    <input type="text" placeholder={`${prodPopUp.totalDescuento}%`} id ="descuento" name="totalDescuento"/>
                                 </label>
                                :<label for="hayDescuento">Sin descuento
                                    <input type="text" placeholder={'Agregar descuento'} id ="descuento" name="hayDescuento"/>
                                 </label>
                            }
                        </div>
                    </div>
                <button
                    className="btn-save-info"
                    onClick={()=>{
                        setShowPopUp('popUpHidden');
                    }}>Modificar
                </button>
                </form>
            </div>
        )
    }

    return(
        <>
            <div className="update-product">
                {prods.map((e)=>{
                    return(
                        <div key={prods.indexOf(e)} className="product-line">
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