import productos from "../assets/products/products.json"
import "./productos.css"
export const Productos = () => {
    function porcentaje (precioOriginal,descuento){
        let auxiliar = precioOriginal-((descuento*precioOriginal)/100);

        return auxiliar
    }
    return(
        <section className="productos">
            {productos.map((e)=>{
                return(
                    <div className="card" key={productos.indexOf(e)}>
                        <div className="card-top">
                            <img src={e.foto} alt={e.marca}/>
                            <div className="card-top_brand-name">
                                <p>{e.marca}</p>
                                <p>{e.nombre}</p>
                            </div>
                        </div>
                        <div className="card-description">
                            <p>{e.descripcion}</p>
                        </div>
                        <div className="card-price">
                            {e.descuento.hayDescuento
                                ?<div>
                                    <p className="precio-tachado">
                                        {e.precio}
                                    </p>
                                    <p className="precio-descuento">
                                        {porcentaje(e.precio,e.descuento.totalDescuento)}
                                    </p>
                                </div>
                                :<p>{e.precio}</p>}
                        </div>
                        <p>{e.stock}</p>
                    </div>
                )
            })
            }
        </section>
    )
}

