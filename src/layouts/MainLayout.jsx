import { Children } from "react";
import Navbar from "../components/Navabar";
import Sidebar from "../components/Sidebar";
import Lines from "../pages/Lines";

export default function MainLayout ({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>
            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}