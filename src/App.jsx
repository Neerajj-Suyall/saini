import React from "react";
import  Header from "./pages/Header";
import  Footer  from "./pages/Footer";
import './App.css'
import {  Outlet, ScrollRestoration } from "react-router-dom"


function App() {
        

        return (
                <>
                        <Header />
                        <Outlet />
                        <ScrollRestoration />   
                        <Footer />
                </>
        );
}

export default App;
