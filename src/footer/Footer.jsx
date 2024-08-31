import "./footer.css";
import { Link } from "react-router-dom";
import {Logo} from "../header/Logo"
import { NavbarMenu } from "../RoutesConfig";

export const Footer =()=>{
    return(
        <footer>
            <div className="logoFooter">
                <Logo/>
            </div>
            <div>
                <ul className="ulFooter">
                {NavbarMenu.map((e)=>{
                    return(
                        <Link
                        key={NavbarMenu.indexOf(e)}
                        to={e.path}>
                            {e.name}
                        </Link>
                    )
                    })}
                </ul>
            </div>
            <div>
                redes
            </div>
        </footer>
    )
}