import { Children } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navabar"

export default function MainLayout() {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}