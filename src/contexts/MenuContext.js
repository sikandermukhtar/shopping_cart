import {useContext , createContext} from "react";

export const MenuContext = createContext({
    isMenuOpen : true,
    toggleMenu: () => {}
})

export const MenuProvider = MenuContext.Provider;

export const useMenu = () => {
    return useContext(MenuContext)
}