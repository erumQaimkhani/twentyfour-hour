
// export default Shop;
import React from "react";

import Greenheader from "../Components/greenheader";
import LogosSection from "../Components/logosection";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Show from "../Components/show";
import Footer from "../Components/footer";
import ProductCards from "../Components/productcards";





export default function Shop  () {
  return (
    <div>
      <Greenheader />
    
      <Show />
     
      <Breadcrumb  />
      <LogosSection />

      <Footer />
      <ProductCards />
      
      </div>)}
;
