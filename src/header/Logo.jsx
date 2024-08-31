import logoDede from "../assets/DedeBeautyLogo24.png"
import { Link } from "react-router-dom"
export const Logo =()=>{
    return(
        <div>
            <Link to="/">
                <img src={logoDede} alt="Logo DeDe" style={{width:"125px"}}/>
            </Link>
        </div>
    )
}