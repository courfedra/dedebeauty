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
            <div className="navbarFooter">
                <ul className="ulFooter">
                {NavbarMenu.map((e)=>{
                    return(
                        <Link
                        className="linkFooter"
                        key={NavbarMenu.indexOf(e)}
                        to={e.path}>
                            {e.name}
                        </Link>
                    )
                    })}
                </ul>
            </div>
            <div className="redesFooter">
                <i className="fa-brands fa-whatsapp">
                    <p>+54 9 263 1234567</p>
                </i>
                <i class="fa-brands fa-instagram">
                    <p>@dedebeauty</p>
                </i>
                <i class="fa-solid fa-at">
                    <p>dedebeauty@gmail.com</p>
                </i>

            </div>
        </footer>
    )
}