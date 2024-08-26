import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavbarMenu } from "./RoutesConfig"
import {Header} from "./header/Header"
import {Footer} from "./footer/Footer"

function App() {
  return(
    <BrowserRouter basename="/">
      <Header/>
      <Routes>
        {NavbarMenu.map((e)=>{
          return(
            <Route key={NavbarMenu.indexOf(e.path)} path={e.path} element={e.element} />
          )
        })}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
