import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from '../Pages/ua/frontpage/FrontPage';
import FrontPageEN from '../Pages/en/frontpage/FrontPage';
import Header from '../Header/Header';
import HeaderEN from '../Header/HeaderEN';
import Footer from '../Footer/Footer';
import FooterEN from '../Footer/FooterEN';
import CompliteDonationPage from '../Pages/CompliteDonationPage';
import PagesRoutingEN from '../Pages/en/PagesRouting';
import PagesRoutingUA from '../Pages/ua/PagesRouting';
import PagesEN from '../Pages/PagesEN';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<>
                <PagesRoutingUA />
            </>} />
            <Route path='/en/*' element={<>
                <PagesRoutingEN />
            </>} />
            <Route path='/en/completed' element={<>
                <HeaderEN />
                <CompliteDonationPage />
                <FooterEN />
            </>} />

        </Routes>
    );
}

export default AppRoutes;
