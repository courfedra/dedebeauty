export function CategoriesList(prod){
    let list=[];
    prod.map((cat)=>{
        !list.includes(cat.categorie)&&list.push(cat.categorie);
    });
    return list;
}

