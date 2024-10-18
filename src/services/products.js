//Guardar o modificar elementos

import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "./persistence/localstorage";
import { closeModal } from "./views/modal";
import { handleGetProductToStore, handleRenderList } from "./views/store";
import Swal from "sweetalert2";


/* ===== PRODUCT ===== */



//guardamos
const aceptar = document.getElementById("acceptButton");
    aceptar.addEventListener("click", () =>{
        handleSaveOrModifyElements();

    });

//funcion de guardar
const handleSaveOrModifyElements = () => {
const nombre = document.getElementById("name").value,
 imagen = document.getElementById("image").value,
 precio = document.getElementById("price").value,
 categorias = document.getElementById("category").value;

let object = null;

if(productoActivo){
    object = {
        ...productoActivo,
        nombre,
        imagen,
        precio,
        categorias,  
    }

} else {
     object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categorias  
    };
    
}

Swal.fire({
    title: "Hecho!",
    text: "Se ha agregado un elemento",
    icon: "success"
  });

setInLocalStorage(object);
handleGetProductToStore();
closeModal();
};

//eliminar elemento

export const handleDeleteProduct = () => {
    Swal.fire({
        title: "Estás seguro de eliminar este producto?",
        text: "No hay marcha atrás!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {

            const products = handleGetProductLocalStorage();
            const result = products. filter((elem)=> elem.id !== productoActivo.id);
             
            //setear el nuevo array
              localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
            //alerta
          Swal.fire({
            title: "Eliminado!",
            text: "El producto fue eliminado",
            icon: "success"
          });
        } else {
            closeModal();
        }
      });   

}