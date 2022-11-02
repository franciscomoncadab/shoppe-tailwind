import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import DetailsProducts from "../../pages/DetailsProducts";
import NotFoundPage from "../../pages/NotFoundPage"
import { HOME, DETAILS, ADITIONALINFO, REVIEWS } from "../../routes/routes";
import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer"
import Description from "../atoms/Description";
import AditionalInfo from "../atoms/AditionalInfo";
import Reviews from "../molecules/Reviews";

function MainRouter() {
     return (  
          <BrowserRouter>
          <NavBar />
          <Routes>
               <Route path={HOME} element={<LandingPage />} />
               <Route path={DETAILS} element={<DetailsProducts />} >
                    <Route path={DETAILS} element={<Description />} />
                    <Route path={ADITIONALINFO} element={<AditionalInfo />} />
                    <Route path={REVIEWS} element={<Reviews />} />
               </Route>
               <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
          </BrowserRouter>
     );
}

export default MainRouter;