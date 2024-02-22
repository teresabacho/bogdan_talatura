import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from './skills/Skills';
import MyWorks from './myWorks/MyWorks';
import Contacts from './contacts/Contacts';
import Footer from "./footer/Footer";
import MainVstup from "./Vstup/MainVstup";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MainVstup/>
            <Skills/>
            <MyWorks/>
            {/*<Contacts/>*/}
            <Footer/>
        </div>
    );
}

export default App;
