import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectOhua from "./directions/ProjectOhua";
import FrontPage from "./frontpage/FrontPage";
import Header from "../../Header/HeaderEN";
import Footer from "../../Footer/FooterEN";

const PagesRouting = () => {

    return (
        <>
        <Header />
        <div className="Page eng">
            <Routes>     
                <Route path="/" element={<FrontPage />}/>
                <Route path="/directions/ohua" element={<ProjectOhua />}/>
            </Routes>
        </div>
        <Footer />
        </>
    )
}

export default PagesRouting;