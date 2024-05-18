import {useContext, createContext} from "react";

export const ProductContext = createContext({
    products : [],
    favourites: [],
    addFavourites: () => {}
})

export const useProduct = () =>{
    return useContext(ProductContext)
}

export const ProductProvider = ProductContext.Provider;