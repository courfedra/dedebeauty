import { Link } from "react-router-dom";
import { NavbarMenu } from "../RoutesConfig";
import "./navbar.css";

export const Navbar=()=> {
  return (
    <navbar>
      <ul>
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
    </navbar>
  )
}