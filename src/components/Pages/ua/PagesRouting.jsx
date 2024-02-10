import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectOhua from "./projects/ProjectOhua";
import FrontPage from "./frontpage/FrontPage";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const PagesRouting = () => {

    return (
        <>
        <Header />
        <Routes>     
            <Route path="/" element={<FrontPage />}/>
            <Route path="/projects/ohua" element={<ProjectOhua />}/>
        </Routes>
        <Footer />
        </>
    )
}

export default PagesRouting;