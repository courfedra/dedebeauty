import "./productoDetalle.css"
import { Link } from "react-router-dom";
import { porcentaje } from "../functions/Functions";
import { cantStockWord } from "../functions/Functions";
export const ProductoDetalle=({producto})=>{
    return(
        <>
        <div className="btn-back">
            <Link to="/productos">Volver Atrás</Link>
        </div>
        <div className="container-detalle">
            <div className="box-detalle">
                <div className="box-top">
                    <div className="box-img">
                        <img src={producto.foto} alt={`Detalle producto Id ${producto.id}`}/>
                    </div>
                    <div className="box-brand">
                        <div className="brand-status">
                            <p>{producto.status}</p>
                        </div>
                        <div className="brand-brand">
                            <h2>{producto.marca}</h2>
                            <h3>{producto.nombre}</h3>
                        </div>
                        <div className="price-box">
                            {producto.descuento.hayDescuento
                            ?<>
                                <p className="price-false">
                                    ${producto.precio}
                                </p>
                                <p className="price-true">
                                    ${porcentaje(producto.precio,producto.descuento.totalDescuento)}
                                </p>
                            </>
                            :<>
                                <p className="price-true">
                                    ${producto.precio}
                                </p>
                            </>
                            }
                        </div>
                        <div className="btn-buy">
                            <div className="cant-stock-word">
                                {cantStockWord(producto.stock)}
                            </div>
                        {producto.stock>0
                        ?<button>Comprar</button>
                        :<button>Encargar</button>
                        }
                        </div>
                    </div>
                </div>
                <div className="box-description">
                    <div className="box-text">
                        <p>{producto.descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="payment-detalle">medios y modos de pagos + carrito</div>
        </div>
    </>
    )
}