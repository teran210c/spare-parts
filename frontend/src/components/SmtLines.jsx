import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Neutral from "../assets/Lines/neutral.png"
import SMTL5 from "../assets/Lines/A1TS5.png"
import SMTL3 from "../assets/Lines/A1TS3.png"
import SMTL2 from "../assets/Lines/A1TS2.png"
import SMTL1 from "../assets/Lines/A1TS1.png"
import Chip from "../assets/green_chip.png"

export default function smtLines() {
    const [activeLine, setActiveLine] = useState(null)
    const navigate = useNavigate()
    const lines = ["SMT-L5", "SMT-L3", "SMT-L2", "SMT-L1"]

    const iconUrl = Chip

    const imageMap = {
        "SMT-L5": SMTL5,
        "SMT-L3": SMTL3,
        "SMT-L2": SMTL2,
        "SMT-L1": SMTL1
    }

    const currentImage = activeLine ? imageMap[activeLine] : Neutral

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
                        <img className="h-8 m-2" src={iconUrl} alt="" />
                        <p className="font-bold">
                            {line}
                        </p>
                    </li>

                ))}
            </ul>

            <div className="w-1/2 h-1/2 shadow-md">
                <img src={currentImage} alt={activeLine || "neutral lines"} />
            </div>
        </div>
    )
}