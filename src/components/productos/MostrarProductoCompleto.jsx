import "./mostrarProductos.css"
export const MostrarProductoCompleto = ({producto}) => {
    function porcentaje (precioOriginal,descuento){
        let auxiliar = precioOriginal-((descuento*precioOriginal)/100);
        return auxiliar
    }
    return(
        <div className="card">
            <div className="card-top">
                <div className="img-descuento">
                    <img src={producto.foto} alt={producto.marca}/>
                    {producto.descuento.hayDescuento&&<p className="img-descuento-ribbon">-{producto.descuento.totalDescuento}%</p>}
                </div>
                <div className="card-top_brand-name">
                    <p>{producto.marca}</p>
                    <p>{producto.nombre}</p>
                </div>
            </div>
            <div className="card-description">
                <p>{producto.descripcion}</p>
                <p>{producto.categoria}</p>
            </div>
            <div className="card-price">
                {producto.descuento.hayDescuento
                    ?<div className="card-price-precio">
                        <p className="precio-tachado">
                            ${producto.precio}
                        </p>
                        <p className="precio-descuento">
                            ${porcentaje(producto.precio,producto.descuento.totalDescuento)}
                        </p>
                    </div>
                    :<div className="card-price-precio">
                        <p className="precio-descuento">${producto.precio}</p>
                    </div>}
            </div>
            {producto.stock>0
                ?<div className="card-buy-true">
                    <p>{producto.stock} Disponible</p>
                    <button>Comprar</button>
                </div>
                :<div className="card-buy-false"><p>No disponible</p></div>}
        </div>
    )
}