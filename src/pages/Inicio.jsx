import "./inicio.css"
import bannerHero from "../assets/dedeBeautyBannerHero.jpg"
import bannerCategorias from "../assets/categoriasBanner.jpg"
import bannerOffer from "../assets/blackFridayDedeBeauty.png"
import productos from "../assets/products/products.json"
import { ShowOfferProductos } from "../components/functions/ShowOfferProducts"
import { ShowBoxCategories } from "../components/functions/ShowBoxCategories"

export const Inicio = () => {
  return (
    <div className="container-home">
      <div className="banner-home">
        <img src={bannerHero} alt="Banner Hero"/>
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
          <ShowBoxCategories/>
        </div>
      </div>
      <div className="info-home">
        info de envio cobro medio pago etc
      </div>

    </div>
  )
}