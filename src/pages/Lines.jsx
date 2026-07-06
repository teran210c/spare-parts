import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Lines() {
    const [activeLine, setActiveLine] = useState(null)
    const navigate = useNavigate()

    const lines = ["SMT-L5", "SMT-L3", "SMT-L2", "SMT-L1"]

    console.log(activeLine)
    return (
        <div className="flex flex-1 min-h-screen items-center justify-center">
            <ul>
                {lines.map((line, index) => (
                    <li
                        key={index}
                        className="m-4 p-3 bg-gray-300 w-50 cursor-pointer"
                        onMouseEnter={() => setActiveLine(line)}
                        onMouseLeave={() => setActiveLine(null)}
                        onClick={() => navigate(`/line/${line}`)} 
                    >
                        {line}
                    </li>

                ))}
            </ul>
            {/* futuro componente */}
            <div className="flex flex-col items-center justify-center bg-gray-200 h-100 w-200 m-4">
                <div 
                    className={`bg-gray-500 h-1/6 w-9/10 m-2 ${activeLine === "SMT-L5" ? "opacity-100" : "opacity-40"}`}
                >

                </div>
                <div
                    className={`bg-gray-500 h-1/6 w-9/10 m-2 ${activeLine === "SMT-L3" ? "opacity-100" : "opacity-40"}`}
                >

                </div>
                <div 
                    className={`bg-gray-500 h-1/6 w-9/10 m-2 ${activeLine === "SMT-L2" ? "opacity-100" : "opacity-40"}`}
                >

                </div>
                <div 
                    className={`bg-gray-500 h-1/6 w-9/10 m-2 ${activeLine === "SMT-L1" ? "opacity-100" : "opacity-40"}`}

                >

                </div>

            </div>
        </div>
    )
}