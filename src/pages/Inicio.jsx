import "./inicio.css"
import bannerNombre from "../assets/dedeBeautyBannerNombreLogo.jpg"
import bannerCategorias from "../assets/categoriasBanner.jpg"
import bannerOffer from "../assets/blackFridayDedeBeauty.png"
import productos from "../assets/products/products.json"
import { ShowCategories } from "../components/functions/showCategories"
import { ShowOfferProductos } from "../components/functions/ShowOfferProducts"

export const Inicio = () => {
  return (
    <div className="container-home">
      <div class="banner-home">
        <img src={bannerNombre} alt="Banner Nombre"/>
      </div>
      <div className="presentation-home">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.</p>
      </div>
      <div className="offer-home">
        <div className="offer-banner">
          <img src={bannerOffer} alt="Banner Sale"/>
        </div>
        <div className="offer-products">
          <ShowOfferProductos prod={productos}/>
        </div>
      </div>
      <div className="categories-home">
        <div className="categories-img">
          <img src={bannerCategorias} alt="Banner Categorias"/>
        </div>
        <div className="categories-list">
          <ShowCategories prod={productos}/>
        </div>
      </div>
      <div className="info-home">
        info de envio cobro medio pago etc
      </div>

    </div>
  )
}