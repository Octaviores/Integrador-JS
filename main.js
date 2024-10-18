import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/services/views/modal";
import { handleGetProductToStore } from "./src/services/views/store";
import "./style.css";

/* ===== APLICACION ===== */
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn
}


handleGetProductToStore();

renderCategories();

//HEADER

const buttondAdd = document.getElementById("buttonAddElement");
    buttondAdd.addEventListener("click", ()=>{
        openModal();

    });

//buttonSearch

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () =>{

    handleSearchProductByName();
})



