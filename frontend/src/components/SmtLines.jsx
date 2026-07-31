import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Neutral from "../assets/Lines/neutral.png"
import SMTL5 from "../assets/Lines/SMTL5.png"
import SMTL3 from "../assets/Lines/SMTL3.png"
import SMTL2 from "../assets/Lines/SMTL2.png"
import SMTL1 from "../assets/Lines/SMTL1.png"
import Chip from "../assets/green_chip.png"

export default function smtLines() {
    const [activeLine, setActiveLine] = useState(null)
    const navigate = useNavigate()
    const lines = ["L5", "L3", "L2", "L1"]

    const getImageUrl = (name) => {
        return new URL(`../assets/Lines/SMT${name}.png`, import.meta.url).href
    }

    return (
        <div className="flex flex-1 h-full min-h-0">
            <ul className="overflow-y-auto shrink-0 pr-2">
                {lines.map((line, index) => (
                    <li
                        key={index}
                        className="flex items-center h-16 w-64 mb-4 mr-4 p-3 bg-zinc-50 rounded-lg shadow-md cursor-pointer duration-200 hover:bg-lime-50"
                        onMouseEnter={() => setActiveLine(line)}
                        onMouseLeave={() => setActiveLine(null)}
                        onClick={() => navigate(`/line/${line}`)}
                    >
                        <img className="h-8 m-2" src={Chip} alt="chip-icon" />
                        <p className="font-bold">
                            SMT-{line}
                        </p>
                    </li>

                ))}
            </ul>

            <div className="flex justify-center shadow-lg flex-1 h-full w-full min-w-0 overflow-hidden rounded-sm">
                <img 
                    className="h-full w-full object-content" 
                    src={activeLine ? getImageUrl(activeLine) : Neutral} 
                    alt={activeLine || "neutral lines"} 
                />
            </div>
        </div>
    )
}