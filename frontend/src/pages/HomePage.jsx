import React from "react";
import Sliders from "../components/Slider/Sliders";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";


import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

import CampaignTwo from "../components/CampaignTwo/CampaignTwo";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Categories />
      <CampaignTwo/>
      <Products />
     
     
      
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;
