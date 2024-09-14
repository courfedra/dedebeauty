export function CategoriesList(prod){
    let list=[];
    prod.map((cat)=>{
        !list.includes(cat.categorie)&&list.push(cat.categorie);
    });
    return list;
}

export function OfferList(prod){
    let list=prod.filter((e)=>e.descuento.hayDescuento==true);
    return list;

}

export function porcentaje (precioOriginal,descuento){
    let auxiliar = precioOriginal-((descuento*precioOriginal)/100);
    return auxiliar
}
export function cantStockWord(stock){
    if (stock==0){
        return(<h4>No hay stock</h4>)
    }else{
        if (stock==1){
            return(<h4>hay {stock} unidad disponible</h4>)
        }else{
            return(<h4>hay {stock} unidades disponibles</h4>)
        }
    }
}