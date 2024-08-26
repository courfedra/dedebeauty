import "./header.css";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Sesion } from "./Sesion";

export const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <Navbar/>
      <Sesion/>
    </header>
  )
}