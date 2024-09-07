import "./inicio.css"
import bannerNombre from "../assets/dedeBeautyBannerNombreLogo.jpg"
import bannerMadre from "../assets/dedeBeautyBannerOfertaMadre.jpg"
export const Inicio = () => {
  return (
    <div className="container-home">
      <div class="banner-home">
        <img src={bannerNombre} alt="Banner Nombre"/>
      </div>
      <div className="offer-home">
ofertas
      </div>
      <div className="categories-home">
categorias
      </div>
      <div className="info-home">
info de envio cobro medio pago etc
      </div>

    </div>
  )
}