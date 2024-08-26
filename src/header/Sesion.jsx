import { Login } from "../components/sesion/Login"
import { Register } from "../components/sesion/Register"
import "./sesion.css";

export const Sesion =()=>{
    return(
        <div className="sesion">
            <Login/>
            <Register/>
        </div>
    )
}