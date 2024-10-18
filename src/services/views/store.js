// ===== STORE ===== 

import { setProductoActivo } from "../../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { openModal } from "./modal";


//funcion que se encargaa de traer los elementos y llamar al render
export const handleGetProductToStore = () => {

    const products = handleGetProductLocalStorage();
    handleRenderList(products);
}

//funcion que se encargar de filtrar y de renderiza la seccion con todos sus respectivos elementos
export const handleRenderList = (productosIn) => {

    //filtrado de arrays por categoria
    const burguers = productosIn.filter((elem) => elem.categorias === "Hamburguesas");
    const papas = productosIn.filter((elem) => elem.categorias === "Papas");
    const gaseosas = productosIn.filter((elem) => elem.categorias === "Gaseosas");

    //renderiza los elementos de la seccion
    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div class = "containerTargetItem" id="product-${producto.categorias}-${index}">
                          <div>

                              <img src="${producto.imagen}" alt="${producto.nombre}" />
                              <div class = "containerNameTargetItem">
                                  <h2>${producto.nombre}</h2>
                              </div>

                               <div class = "targetProps">
                                 <p><b>Precio:</b> $${producto.precio}</p>
                                 <p><b>Categoría:</b> ${producto.categorias}</p>
                               </div>

                          </div>
                        </div>`;
            });

            //retorno la seccion con todos los elementos dentro
            return `
            <section class = "sectionStore">

                <div class = "containerTitleSection">
                    <h3>${title}</h3>
                </div>

                <div class = "containerProductStore">
                    ${productosHTML.join("")}
                </div>

            </section>`;
        } else {
            return "";
        }
    };
    

//renderizar cada uno de los productos dentro de su categoria
const appContainer = document.getElementById("storeContainer");
appContainer.innerHTML = `
${renderProductGroup(burguers, "Hamburguesas")}
${renderProductGroup(papas, "Papas")}
${renderProductGroup(gaseosas, "Gaseosas")}`


//se añaden los evento de manera dinamica
const addEvents = (productsIn) =>{
    productsIn.forEach((element,index)=> {
        const productContainer = document.getElementById(`product-${element.categorias}-${index}`);

        productContainer.addEventListener("click",()=>{
            setProductoActivo(element);
            openModal();

        });
    });
};


addEvents(burguers);
addEvents(papas);
addEvents(gaseosas);

};