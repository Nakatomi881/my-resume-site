import React from "react"
import Navbar from "../navbar/Navbar"
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";


const Layout: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="page-container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;