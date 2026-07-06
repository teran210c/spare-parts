import { Children } from "react";
import Navbar from "../components/Navabar";
import Sidebar from "../components/Sidebar";
import Lines from "../pages/Lines";

export default function MainLayout ({ children }) {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar/>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}