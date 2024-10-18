
/* ===== POP UP ===== */

import { productoActivo, setProductoActivo } from "../../../main";
import { handleDeleteProduct } from "../products";

const cancelar = document.getElementById("cancelButton");
cancelar.addEventListener("click", () =>{
    handleCancelButton();

});

const handleCancelButton = () => {
    closeModal()
}

//Funciones para abrir y cerrar el PopUp
 export const  openModal = () => {
    const modal = document.getElementById("nodalPopUp");
      modal.style.display = "flex";
      const buttonDelete = document.getElementById("deleteButton");

if(productoActivo){
    buttonDelete.style.display = "block";
} else {
    buttonDelete.style.display = "none";
}




      if(productoActivo){
        const nombre = document.getElementById("name"),
        imagen = document.getElementById("image"),
        precio = document.getElementById("price"),
        categorias = document.getElementById("category");
        
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categorias.value = productoActivo.categorias;
    };
};



const resetModal = () => {
    const nombre = document.getElementById("name"),
    imagen = document.getElementById("image"),
    precio = document.getElementById("price"),
    categorias = document.getElementById("category");
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categorias.value = "Seleccione una categoria";
   
}

export const  closeModal = () => {
    const modal = document.getElementById("nodalPopUp");
     modal.style.display = "none";
     setProductoActivo(null);
     resetModal();
};

const delteButton = document.getElementById("deleteButton");
delteButton.addEventListener("click",()=>{
    handleDeleteButton();
})

const handleDeleteButton = () =>{
    handleDeleteProduct();
}