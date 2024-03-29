import React from "react";
import './App.scss';
import Header from "../../widgets/header/ui/Header";
import Main from "../../pages/main/ui/Main";
import Footer from "../../widgets/footer/ui/Footer";
import Skills from "../../entities/skills/ui/Skills";
import Hire from "../../entities/hire/ui/Hire";
import Projects from "../../entities/projects/ui/Projects";
import Contacts from "../../entities/contacts/ui/Contacts";



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
