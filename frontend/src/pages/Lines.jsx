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
        setActiveLine(null)

        fetch(`http://localhost:5267/api/lines?dept=${selectedDept}`)
            .then((res) => {
                if (!res.ok) throw new Error("Error fetching lines")
                return res.json()
            })
            .then((data) => {
                setLines(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLines([])
                setLoading(false)
            })
    }, [selectedDept])

    useEffect(() => {
        if (lines.length === 0) return

        lines.forEach((line) => {
            const folder = selectedDept === "SMT" ? "SMT" : "DIP"
            const fullPath = `../assets/Lines/${folder}/${line.name}.png`
            const imgUrl = imagesJson[fullPath]?.default

            if (imgUrl) {
                const img = new Image()
                img.src = imgUrl
            }
        })
    }, [lines, selectedDept])

    const getImageUrl = (name, dept) => {
        const folder = dept === "SMT" ? "SMT" : "DIP"
        if (!name) {
            const neutralPath = `../assets/Lines/${folder}/neutral.png`
            return imagesJson[neutralPath]?.default || null
        }
        const fullPath = `../assets/Lines/${folder}/${name}.png`
        return imagesJson[fullPath]?.default || null
    }

    const isSMT = selectedDept === "SMT"
    const hoverBg = isSMT ? "hover:bg-lime-50" : "hover:bg-indigo-50"
    const chipIcon = isSMT ? GreenChip : BlueChip

    return (
        // 1. EL PADRE: Ahora es un Grid vertical (Fila 1: Cabecera/Filtros, Fila 2: El espacio de trabajo)
        <div className="grid grid-rows-[auto_1fr] w-full h-full min-h-0 p-4 gap-2">

            {/* ZONA DE CONTROL (Botones superiores y Título) */}
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex justify-center w-full mb-2">
                    <button
                        onClick={() => setSelectedDept("SMT")}
                        className={`px-6 py-1.5 w-24 bg-[#2d3748] text-white font-semibold rounded-l-lg border border-transparent shadow-sm transition-all duration-200 hover:bg-[#3a475c] active:scale-95 ${selectedDept === "SMT"
                            ? "bg-[#2d3748] text-white shadow-sm border border-transparent hover:bg-[#3a475c]"
                            : "bg-slate-800/40 text-gray-400 border border-slate-700/50 hover:text-white"
                            }`}
                    >
                        SMT
                    </button>
                    <button
                        onClick={() => setSelectedDept("DIP")}
                        className={`px-6 py-1.5 w-24 bg-[#2d3748] text-white font-semibold rounded-r-lg border border-transparent shadow-sm transition-all duration-200 hover:bg-[#3a475c] active:scale-95 ${selectedDept === "DIP"
                            ? "bg-[#2d3748] text-white shadow-sm border border-transparent hover:bg-[#3a475c]"
                            : "bg-slate-800/40 text-gray-400 border border-slate-700/50 hover:text-white"
                            }`}
                    >
                        DIP
                    </button>
                </div>
                <h1 className="text-xl font-bold tracking-wider text-slate-800 uppercase">
                    Select Line
                </h1>
            </div>

            {/* 2. ZONA DE TRABAJO DINÁMICA: 
               En móvil es 1 columna hacia abajo. En PC (md:) divide la lista (280px) y el plano (1fr) */}
            <div className="grid grid-cols-[280px_1fr] gap-6 w-full h-full min-h-0 overflow-hidden px-4">
                
                {/* SECCIÓN IZQUIERDA: Listado de líneas */}
                <div className="w-full h-full min-h-0 flex justify-center md:justify-start overflow-hidden">
                    {loading ? (
                        <div className="text-gray-400 font-semibold text-lg animate-pulse m-auto">Loading lines...</div>
                    ) : (
                        <ul
                            className="w-full h-full overflow-y-auto overflow-x-hidden pr-2"
                            style={{ direction: 'rtl' }}
                        >
                            {lines.map((line) => (
                                <li
                                    key={line.id}
                                    className={`flex items-center h-14 w-full max-w-[260px] mb-2 p-3 bg-white rounded-xl shadow-xs cursor-pointer border border-slate-100 duration-200 ml-auto ${hoverBg}`}
                                    onMouseEnter={() => setActiveLine(line.name)}
                                    onMouseLeave={() => setActiveLine(null)}
                                    onClick={() => navigate(`/line/${line.id}`)}
                                    style={{ direction: 'ltr' }}
                                >
                                    <img className="h-6 mr-3" src={chipIcon} alt="chip-icon" />
                                    <p className="font-bold text-slate-700">
                                        {isSMT ? `SMT-${line.name}` : line.name}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* SECCIÓN DERECHA: Contenedor Blanco del Plano */}
                <div className="w-full h-8/10 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-4 overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Capa Base: Imagen Neutral */}
                        <img
                            src={getImageUrl(null, selectedDept)}
                            alt={`Mapa Neutral ${selectedDept}`}
                            className="w-full h-full object-contain select-none pointer-events-none"
                        />

                        {/* Capas Pre-renderizadas */}
                        {!loading && lines.map((line) => {
                            const imgUrl = getImageUrl(line.name, selectedDept)
                            if (!imgUrl) return null

                            return (
                                <img
                                    key={line.id}
                                    src={imgUrl}
                                    alt={`Línea ${line.name}`}
                                    className={`absolute top-0 left-0 w-full h-full object-contain select-none pointer-events-none transition-opacity duration-75 ${activeLine === line.name ? "opacity-100 z-10" : "opacity-0 z-0"
                                        }`}
                                />
                            )
                            
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
