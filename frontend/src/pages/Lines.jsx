import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SmtLines from "../components/SmtLines"
import DIP from "../components/DipLines"


export default function Lines() {
    const [selectedDept, setSelectedDept] = useState("SMT")


    return (
        <div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => setSelectedDept("SMT")}
                    className={`px-6 py-2.5 bg-[#2d3748] text-white font-semibold rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:bg-[#3a475c] active:scale-95 mr-4 ${selectedDept === "SMT"
                        ? "bg-[#2d3748] text-white shadow-sm border border-transparent hover:bg-[#3a475c]"
                        : "bg-slate-800/40 text-gray-400 border border-slate-700/50 hover:text-white"
                        }`}
                >
                    SMT
                </button>
                <button
                    onClick={() => setSelectedDept("DIP")}
                    className={`px-6 py-2.5 bg-[#2d3748] text-white font-semibold rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:bg-[#3a475c] active:scale-95 mr-4 ${selectedDept === "DIP"
                        ? "bg-[#2d3748] text-white shadow-sm border border-transparent hover:bg-[#3a475c]"
                        : "bg-slate-800/40 text-gray-400 border border-slate-700/50 hover:text-white"
                        }`}
                >
                    DIP
                </button>
            </div>
            {selectedDept === "SMT" && <SmtLines />}
            {selectedDept === "DIP" && <DIP />}
        </div>
    )
}