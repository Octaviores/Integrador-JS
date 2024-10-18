// ===== LOCALSTORAGE =====

//Traer productos localStorage
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products){
        return products;
    } else {
    return[];
    }
};

//Guardar en localStorage

//recibir un producto
export const setInLocalStorage = (productIn) =>{

    
    //Traer los elementos
    let productsInLocal = handleGetProductLocalStorage();

    const existingIndex = productsInLocal.findIndex((productsLocal) =>
    productsLocal.id === productIn.id
    )


    //si existe, debe reemplazarse
    //si no, agregarlo

    if(existingIndex !== -1){
        productsInLocal[existingIndex] = productIn;
    } else {
        productsInLocal.push(productIn);
    }

    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
    
};

