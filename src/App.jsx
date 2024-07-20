import React, {useEffect, useState} from 'react';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import LoginPage from './components/auth/login/LoginPage.jsx';
import RegisterPage from './components/auth/register/RegisterPage.jsx';
import { AuthProvider } from './contexts/authContext/index.js';
import {ProductProvider} from "./contexts/productContext/ProductContext.js";
import {db} from "./firebase/firebase.js";
import {query, collection, onSnapshot} from "firebase/firestore";
import Favourites from "./components/User/Favourites.jsx";
import Product from "./components/Product/Product.jsx";
import ListProduct from "./components/Product/ListProduct.jsx";

export default function App(){
  const [currentUser, setCurrentUser] = useState('');
  const setCurrentUserFunction = (user) => {
    setCurrentUser(user);
  };

    const [products, setProducts] = useState([]);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'products'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let productsArray = []
            querySnapshot.forEach((doc) =>{
                productsArray.push({...doc.data(), id:doc.id})
            });
            setProducts(productsArray);
        })
        return () => unsubscribe()
    }, []);

    const addFavourites = () => {
        let favouritesArray = []
        products.map((product) => {
            if (product.isFavourite === true){
                favouritesArray.push(product)
            }
        })
        setFavourites(favouritesArray);
    }


  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='arch/'>
              <Route path='login/' element={<LoginPage />} />
              <Route path='register/' element={<RegisterPage />} />
            </Route>
            <Route path={'product/'} element={<Product/>}>
                <Route path={'list-new-product/'} element={<ListProduct />}></Route>
            </Route>
            <Route path={'favourites/'} element={<Favourites/>}></Route>
          </Route>
      )
  );

  return (
      <React.StrictMode>
        <AuthProvider value={{ currentUser, setCurrentUserFunction }}>
            <ProductProvider value={{products, favourites, addFavourites}}>
                <RouterProvider router={router} />
            </ProductProvider>
        </AuthProvider>
      </React.StrictMode>
  );
}
