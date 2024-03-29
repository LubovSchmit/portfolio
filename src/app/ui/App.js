import React from "react";
import './App.scss';
import Header from "../header/Header";
import Main from "../main/Main";
import Hire from "../hire/Hire";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Hire/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
