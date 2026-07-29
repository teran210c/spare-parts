import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function smtLines() {
    const [activeLine, setActiveLine] = useState(null)
    const navigate = useNavigate()
    const lines = ["DIP-L1", "DIP-L2", "DIP-L3"]



  
    return (
        <div className="flex justify-center">
            <ul>
                {lines.map((line, index) => (
                    <li
                        key={index}
                        className="flex items-center h-16 w-64 mb-4 mr-4 p-3 bg-gray-50 w-50 rounded-lg shadow-md cursor-pointer duration-200 hover:bg-lime-50"
                        onMouseEnter={() => setActiveLine(line)}
                        onMouseLeave={() => setActiveLine(null)}
                        onClick={() => navigate(`/line/${line}`)}
                    >
                        <img className="h-8 m-2" src="" alt="" />
                        <p className="font-bold">
                            {line}
                        </p>
                    </li>

                ))}
            </ul>

            <div className="w-1/2 h-1/2 shadow-md">
                <img src="" alt={activeLine || "neutral lines"} />
            </div>
        </div>
    )
}