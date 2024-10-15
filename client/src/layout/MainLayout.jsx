import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <div style={{marginTop:"75px"}}>
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default MainLayout