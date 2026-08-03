import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import GreenChip from "../assets/green_chip.png"
import BlueChip from "../assets/blue_chip.png"
import Neutral from "../assets/Lines/SMT/neutral.png"

const imagesJson = import.meta.glob("../assets/Lines/**/*.png", { eager: true })

export default function Lines() {
    const [selectedDept, setSelectedDept] = useState("SMT")
    const [lines, setLines] = useState([])
    const [activeLine, setActiveLine] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        setActiveLine(null) // Resetea la imagen activa al cambiar de pestaña

        fetch(`http://localhost:5267/api/lines?dept=${selectedDept}`)
            .then((res) => {
                if (!res.ok) throw new Error("Error fetching lines")
                return res.json()
            })
            .then((data) => {
                setLines(data) // Guarda las líneas ya ordenadas por tu backend
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLines([])
                setLoading(false)
            })
    }, [selectedDept])

    const getImageUrl = (name, dept) => {
        // Forzamos a usar el departamento exacto que le pasemos
        const folder = dept === "SMT" ? "SMT" : "DIP"

        // Si no hay hover, resuelve el neutral de la carpeta correspondiente
        if (!name) {
            const neutralPath = `../assets/Lines/${folder}/neutral.png`
            return imagesJson[neutralPath]?.default || null
        }

        // Si hay hover, resuelve la línea activa
        const fullPath = `../assets/Lines/${folder}/${name}.png`
        return imagesJson[fullPath]?.default || null
    }


    const isSMT = selectedDept === "SMT"
    const hoverBg = isSMT ? "hover:bg-lime-50" : "hover:bg-indigo-50"
    const chipIcon = isSMT ? GreenChip : BlueChip

    return (
        <div className="flex flex-col flex-1 w-full min-h-0">

            <div className="flex justify-center w-full my-2">                
                <button
                    onClick={() => setSelectedDept("SMT")}
                    className={`px-6 py-1.5 w-1/9 bg-[#2d3748] text-white font-semibold rounded-l-lg border border-transparent shadow-sm transition-all duration-200 hover:bg-[#3a475c] active:scale-95 ${selectedDept === "SMT"
                        ? "bg-[#2d3748] text-white shadow-sm border border-transparent hover:bg-[#3a475c]"
                        : "bg-slate-800/40 text-gray-400 border border-slate-700/50 hover:text-white"
                        }`}
                >
                    SMT
                </button>
                <button
                    onClick={() => setSelectedDept("DIP")}
                    className={`px-6 py-1.5 w-1/9 bg-[#2d3748] text-white font-semibold rounded-r-lg border border-transparent shadow-sm transition-all duration-200 hover:bg-[#3a475c] active:scale-95 ${selectedDept === "DIP"
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
            <div className="flex-1 min-h-0 w-full flex flex-col m-8 items-center">
                {loading ? (
                    <div className="text-gray-400 font-semibold text-lg animate-pulse">Loading lines...</div>
                ) : (
                    <div className="flex justify-center">
                        <ul 
                            className="overflow-y-auto scrollbar-thin h-7/12 shrink-0 pr-2"
                            style={{ direction: 'rtl' }}                        
                        >
                            {lines.map((line) => (
                                <li
                                    key={line.id}
                                    className={`flex items-center h-14 w-64 mb-2 mr-4 p-3 bg-zinc-50 rounded-lg shadow-md cursor-pointer duration-200 ${hoverBg}`}
                                    onMouseEnter={() => setActiveLine(line.name)}
                                    onMouseLeave={() => setActiveLine(null)}
                                    onClick={() => navigate(`/line/${line.id}`)}
                                    style={{ direction: 'ltr' }}
                                    
                                >
                                    <img className="h-6 m-2" src={chipIcon} alt="chip-icon" />
                                    <p className="font-bold">
                                        {isSMT ? `SMT-${line.name}` : line.name}
                                    </p>
                                </li>
                            ))}
                            </ul>
                            <div className="flex justify-center shadow-lg h-7/12 min-w-0 overflow-hidden rounded-md bg-zinc-100">
                                <img
                                    className="h-full max-w-full object-fil"
                                    // ⚡ Pasamos selectedDept para forzar la actualización instantánea de la carpeta
                                    src={getImageUrl(activeLine, selectedDept)}
                                    alt={activeLine || `${selectedDept} neutral layout`}
                                />
                            </div>

                    </div>
                )}
            </div>            
        </div>
    )
}