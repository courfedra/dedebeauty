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