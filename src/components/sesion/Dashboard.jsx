import { useAuth0 } from "@auth0/auth0-react";
import "./dashboard.css";
export const Dashboard=()=>{
    const {isAuthenticated} = useAuth0()
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
                    Aca aparecen los productos y demas cosas
                </div>
            </div>

    )
}