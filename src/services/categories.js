// ===== CATEGORIA =====

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "./persistence/localstorage";
import { handleRenderList } from "./views/store";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();


    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((elem)=> elem.categorias === categoryIn)
            handleRenderList(result);

        default:
            break;
        
        case "mayorPrecio":
            const resultPrecioMa = products.sort((a,b)=> b.precio -a.precio);
            handleRenderList(resultPrecioMa);
            break;

        case "menorPrecio":
            const resultPrecioMe = products.sort((a,b)=> a.precio -b.precio);
            handleRenderList(resultPrecioMe);
            break;

        
    }

};








//render de la vista categorias

export const renderCategories = () =>{
    //tomamos elementos de la lista
    const ulist = document.getElementById("listFilter");

    //creamos esos elementos dentro de la lista
    ulist.innerHTML = `
    <li id ="Todo"> Todos los productos </li>
    <li id ="Hamburguesas"> Hamburguesas</li>
    <li id ="Papas"> Papas </li>
    <li id ="Gaseosas"> Gaseosas </li>
    <li id ="mayorPrecio"> MayorPrecio </li>
    <li id ="menorPrecio"> MenorPrecio </li>`;

    //añadimos dinamicante el evento del click
    const liElements = ulist.querySelectorAll("li")
    liElements.forEach((liElement)=> {
        liElement.addEventListener("click",()=>{
            handleClick(liElement);
           
        });
    });

    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (element) => {
        handleFilterProductsByCategory(element.id)
        liElements.forEach((elem)=> {
            if (elem.classList.contains('liActive')){
                elem.classList.remove("liActive");
            }else{
                if(element === elem){
                    elem.classList.add("liActive");
                }
            }

        });

    };
};