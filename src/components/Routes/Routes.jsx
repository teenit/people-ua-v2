import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from '../Pages/FrontPage';
import FrontPageEN from '../Pages/FrontPageEN';
import Header from '../Header/Header';
import HeaderEN from '../Header/HeaderEN';
import Footer from '../Footer/Footer';
import FooterEN from '../Footer/FooterEN';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<>
                <Header />
                <FrontPage />
                <Footer />
            </>} />
            <Route path='/en' element={<>
                <HeaderEN />
                <FrontPageEN />
                <FooterEN />
            </>} />
        </Routes>
    );
}

export default AppRoutes;
