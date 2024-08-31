import "./header.css";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Sesion } from "./Sesion";

export const Header = () => {
  let YPosition = window.screenTop;
  console.log(YPosition)
  YPosition>=0?console.log("mayor que 0"):console.log('menor que 0');
  return (
    <header className="header">
      <Logo/>
      <Navbar/>
      <Sesion/>
    </header>
  )
}