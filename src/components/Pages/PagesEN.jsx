import React from "react";
import { Route, Routes } from "react-router-dom";
import PagesRouting from "./en/PagesRouting";

const PagesEN = () => {

    return (
        <div>
        <Routes>
            <Route path="/*" element={<PagesRouting />}/>
        </Routes></div>
    )
}

export default PagesEN;