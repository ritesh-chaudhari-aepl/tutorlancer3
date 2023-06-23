import "./App.css";
 
import Home from "./pages/Home";
 
import {   Routes, Route } from "react-router-dom";
 import Terms from "./pages/termAmdConditions/terms";
 import Refund from "./pages/termAmdConditions/refund";
 import PrivatePolocies from "./pages/termAmdConditions/privatePolocies";

import Footer from "./pages/Footer";
const App = () => {
  return (
    <>
      
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/refund" element={<Refund />} />
      <Route path="/privacy" element={<PrivatePolocies />} />
      <Route path="/termsandcondition" element={<Terms />} />
      <Route path="*" element={<Home />} />
     

      </Routes>
      <Footer/>
      
    </>
  );
};

export default App;
