import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DetailsProducts from "../pages/DetailsProducts";
import NotFoundPage from "../pages/NotFoundPage"
import { HOME, DETAILS } from "../routes/routes";
import NavBar from "./NavBar";
import Footer from "./Footer"

function MainRouter() {
     return (  
          <BrowserRouter>
          <NavBar />
          <Routes>
               <Route path={HOME} element={<LandingPage />} />
               <Route path={DETAILS} element={<DetailsProducts />} />
               <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
          </BrowserRouter>
     );
}

export default MainRouter;