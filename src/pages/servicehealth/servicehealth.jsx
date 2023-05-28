import "./servicehealth.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import List from "../../serviceHealth/List";
import { Box } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Overview from "./components/overview";
import Tabs from "@mui/material/Tabs"


const getTabview = (selectedTab) => {
  switch (selectedTab) {
    case 0: return(<Overview />)
     
      break;
  
    default:
      break;
  }
  }



const ServiceHealth = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className="servicehealth">
      <Sidebar />
      <div className="servicehealthContainer">
        <Navbar />
        <Box component= "main" sx = {{ flexGrow: 1, p: 3}}>
          <List />
        </Box>
        <Footer />
      </div>
    </div>
  );
};

export default ServiceHealth;