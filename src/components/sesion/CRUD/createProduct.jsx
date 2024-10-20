import "./CRUD.css"
import { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CategoriesList } from "../../functions/Functions";
import { ContextVariables } from "../../ContextVariables";
import { agregarProductoFirebase } from "../../../utils/firebaseConfig";
export const CreateProduct=()=>{
    const {listCategories,agregarProducto}=useContext(ContextVariables);
    const categorias= CategoriesList(listCategories);
    const {user} = useAuth0()

    const preventDefaultSubmit=(event)=>{
        event.preventDefault();
        cargarProducto()
        setTimeout(() => {
            location.reload()
        }, 1500);
    }

    const cargarProducto=()=>{
        let datos = {
            "marca":document.getElementById('marca').value,
            "nombre":document.getElementById('nombre').value,
            "descripcion":document.getElementById('descripcion').value,
            "foto":document.getElementById('foto').value,
            "precio":document.getElementById('precio').value,
            "hayDescuento":document.getElementById('descuento').value!=''?true:false,
            "totalDescuento":document.getElementById('descuento').value!=''&&parseFloat(document.getElementById('descuento').value),
            "stock":document.getElementById('stock').value,
            "status":document.getElementById('nuevoUsado').value,
            "categorie":document.getElementById('categoria').value,
            "vendedor":user.nickname,
        }
        agregarProducto(datos)
    }

    return(
        <>
        <form onSubmit={preventDefaultSubmit}>
            <div className="add-product">
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
                                    <option key={categorias.indexOf(e)} value={e}>{e}</option>
                                )
                            })}
                        </select>
                    </label>
                    <label for="foto">Subir foto
                        <input type="text" id="foto" name="foto"/>
                    </label>
                </div>
                <button className="btn-enviar">
                    <input value="Agregar" type="submit"/>
                </button>
            </div>
        </form>
        </>
    )
}
