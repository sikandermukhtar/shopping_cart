import {useContext, createContext} from "react";

export const AuthContext = createContext({
    currentUser: '',
    setCurrentUserFunction: () => {}
})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = AuthContext.Provider;