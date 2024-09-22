import "./CRUD.css"
import Productos from "../../../assets/products/products.json"
import { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CategoriesList } from "../../functions/Functions";
import { ContextVariables } from "../../ContextVariables";
export const CreateProduct=()=>{
    const {listCategories,agregarProducto}=useContext(ContextVariables);
    const categorias= CategoriesList(listCategories);
    const {user} = useAuth0()
    const [cargar,setCargar]=useState(false)
    const [newProduct,setNewProduct]=useState({
        "marca":"",
        "nombre":"",
        "descripcion":"",
        "foto":"",
        "precio":0,
        "descuento.hayDescuento":false,
        "descuento.totalDescuento":0,
        "stock":0,
        "id":0,
        "status":"",
        "categorie":"",
        "vendedor":user.nickname,
    })
    useEffect(()=>{
        cargar==true&&cargarProducto()
        setCargar(false)
    },[cargar])
    /*useEffect(()=>{
        newProduct.id!=0&&agregarProducto(newProduct)
    },[newProduct])*/

    const cargarProducto=()=>{
        setNewProduct({
            "marca":document.getElementById('marca').value,
            "nombre":document.getElementById('nombre').value,
            "descripcion":document.getElementById('descripcion').value,
            "foto":document.getElementById('foto').value,
            "precio":document.getElementById('precio').value,
            "descuento.hayDescuento":document.getElementById('descuento').value!=''?true:false,
            "descuento.totalDescuento":document.getElementById('descuento').value!=''&&parseFloat(document.getElementById('descuento').value),
            "stock":document.getElementById('stock').value,
            "id":listCategories.length+1,
            "status":document.getElementById('nuevoUsado').value,
            "categorie":document.getElementById('categoria').value,
        })
    }

    const cargarDatos=(event)=>{
        event.preventDefault();
        setCargar(true)
    }

    return(
        <>
        <form onSubmit={cargarDatos}>
            <div class="add-product">
                <div className="block-inputs">
                    <label for="nombre">Agregar nombre
                        <input type="text" id ="nombre" name="nombre"/>
                    </label>
                    <label for="marca">Agregar marca
                        <input type="text" id="marca" name="marca"/>
                    </label>
                    <label for="descripcion">Agregar descripción
                        <textarea type="text" id="descripcion" name="descripcion"/>
                    </label>
                </div>
                <div className="block-inputs">
                    <label for="precio">Agregar precio
                        <input type="number" id="precio" name="precio"/>
                    </label>
                    <label for="descuento">Agregar descuento
                        <input type="number" id="descuento" name="descuento"/>
                    </label>
                    <label for="stock">Agregar stock
                        <input type="number" id="stock" name="stock"/>
                    </label>
                </div>
                <div className="block-inputs">
                    <label for="nuevoUsado">¿Es usado o es nuevo?
                        <select id="nuevoUsado" name="nuevoUsado">
                            <option value="nuevo" selected>Nuevo</option>
                            <option value="usado">Usado</option>
                        </select>
                    </label>
                    <label for="categoria">Seleccione una categoria
                        <select id="categoria" name="categoria">
                            {categorias.map((e)=>{
                                return(
                                    <option value={e}>{e}</option>
                                )
                            })}
                        </select>
                    </label>
                    <label for="foto">Subir foto
                        <input type="text" id="foto" name="foto"/>
                    </label>
                </div>
                <input value="Agregar" type="submit"/>
            </div>
        </form>
        <p>{newProduct.nombre}</p>
        </>
    )
}
