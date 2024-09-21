import "./CRUD.css"
import { useContext } from "react";
import { CategoriesList } from "../../functions/Functions";
import { ContextVariables } from "../../ContextVariables";
export const CreateProduct=()=>{
    const {listCategories}=useContext(ContextVariables);
    const categorias= CategoriesList(listCategories);
    return(
        <div class="add-product">
        <div className="block-inputs">
            <label for="nombre">Agregar nombre
                <input type="text" name="nombre"/>
            </label>
            <label for="marca">Agregar marca
                <input type="text" name="marca"/>
            </label>
            <label for="descripcion">Agregar descripción
                <textarea type="text" name="descripcion"/>
            </label>
        </div>
        <div className="block-inputs">
            <label for="precio">Agregar precio
                <input type="number" name="precio"/>
            </label>
            <label for="descuento">Agregar descuento
                <input type="number" name="descuento"/>
            </label>
            <label for="stock">Agregar stock
                <input type="number" name="stock"/>
            </label>
        </div>
        <div className="block-inputs">
            <label for="nuevoUsado">¿Es usado o es nuevo?
                <select name="nuevoUsado">
                    <option value="nuevo" selected>Nuevo</option>
                    <option value="usado">Usado</option>
                </select>
            </label>
            <label for="categoria">Seleccione una categoria
                <select name="categoria">
                    {categorias.map((e)=>{
                        return(
                            <option value={e}>{e}</option>
                        )
                    })}
                </select>
            </label>
            <label for="foto">Subir foto
                <input type="file" name="foto"/>
            </label>
        </div>
            <label for="submit">
                <input type="submit" name="submit" value="¡Agregar!"/>
            </label>
        </div>
    )
}