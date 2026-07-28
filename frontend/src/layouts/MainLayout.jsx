import { Children } from "react";
import Navbar from "../components/Navabar";
import Sidebar from "../components/Sidebar";
import Lines from "../pages/Lines";
import { Outlet } from "react-router-dom";

export default function MainLayout () {
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1">
                    <Outlet /> 
                </main>
            </div>
        </div>
    )
}