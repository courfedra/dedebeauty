import "./productoDetalle.css"
import { Link } from "react-router-dom";
export const ProductoDetalle=({producto})=>{
    function porcentaje (precioOriginal,descuento){
        let auxiliar = precioOriginal-((descuento*precioOriginal)/100);
        return auxiliar
    }
    return(
        <>
        <div>
            <Link to="/productos">Volver Atrás</Link>
        </div>
        <div className="container-detalle">
            <div className="categories-detalle">filtros</div>
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
                    </div>
                </div>
                <div className="box-description">
                    <p>{producto.descripcion}</p>
                </div>
            </div>
            <div className="payment-detalle">medios y modos de pagos + carrito</div>
        </div>
    </>
    )
}