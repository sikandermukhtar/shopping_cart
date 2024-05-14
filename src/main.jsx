import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import LoginPage from "./components/auth/login/LoginPage.jsx";
import RegisterPage from "./components/auth/register/RegisterPage.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>} >
            <Route path="" element={<Home/>} />
            <Route path="arch/">
                <Route path="login/" element={<LoginPage />} />
                <Route path="register/" element={<RegisterPage />} />
            </Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
