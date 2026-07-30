import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import icon from "../assets/blue_chip.png"

export default function smtLines() {
    const [activeLine, setActiveLine] = useState(null)
    const navigate = useNavigate()
    const lines = ["DIP-L1", "DIP-L2", "DIP-L3"]

    return (
        <div className="flex flex-1 h-full min-h-0">
            <ul className="overflow-y-auto shrink-0 pr-2">
                {lines.map((line, index) => (
                    <li
                        key={index}
                        className="flex items-center h-16 w-64 mb-4 mr-4 p-3 bg-gray-50 rounded-lg shadow-md cursor-pointer duration-200 hover:bg-indigo-50"
                        onMouseEnter={() => setActiveLine(line)}
                        onMouseLeave={() => setActiveLine(null)}
                        onClick={() => navigate(`/line/${line}`)}
                    >
                        <img className="h-8 m-2" src={icon} alt="" />
                        <p className="font-bold">
                            {line}
                        </p>
                    </li>

                ))}
            </ul>

            <div className="shadow-lg flex-1 h-full w-full min-w-0 overflow-hidden rounded-lg">
                <img
                    className="max-h-full max-w-full object-contain"
                    src=""
                    alt={activeLine || "neutral lines"}
                />
            </div>
        </div>

    )
}