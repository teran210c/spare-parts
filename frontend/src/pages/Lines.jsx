import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SmtLines from "../components/SmtLines"
import DIP from "../components/DipLines"


export default function Lines() {
    const [selectedDept, setSelectedDept] = useState("SMT")


    return (
        <div className="flex flex-col flex-1 min-h-0">

            <div className="flex justify-center my-6">                
                <button
                    onClick={() => setSelectedDept("SMT")}
                    className={`px-6 py-2.5 w-1/9 bg-[#2d3748] text-white font-semibold rounded-l-lg border border-transparent shadow-sm transition-all duration-200 hover:bg-[#3a475c] active:scale-95 ${selectedDept === "SMT"
                        ? "bg-[#2d3748] text-white shadow-sm border border-transparent hover:bg-[#3a475c]"
                        : "bg-slate-800/40 text-gray-400 border border-slate-700/50 hover:text-white"
                        }`}
                >
                    SMT
                </button>
                <button
                    onClick={() => setSelectedDept("DIP")}
                    className={`px-6 py-2.5 w-1/9 bg-[#2d3748] text-white font-semibold rounded-r-lg border border-transparent shadow-sm transition-all duration-200 hover:bg-[#3a475c] active:scale-95 ${selectedDept === "DIP"
                        ? "bg-[#2d3748] text-white shadow-sm border border-transparent hover:bg-[#3a475c]"
                        : "bg-slate-800/40 text-gray-400 border border-slate-700/50 hover:text-white"
                        }`}
                >
                    DIP
                </button>
            </div>
            <div className="flex justify-center text-xl font-bold">
                <h1>
                    SELECT LINE
                </h1>
            </div>
            <div className="flex-1 min-h-0 w-9/10 flex flex-col m-8 items-center">
                {selectedDept === "SMT" && <SmtLines />}
                {selectedDept === "DIP" && <DIP />}
            </div>
            
        </div>
    )
}