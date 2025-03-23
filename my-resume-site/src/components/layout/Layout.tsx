import React from "react"
import Navbar from "../navbar/Navbar"
import { Outlet } from "react-router-dom";


const Layout: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="page-container">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;