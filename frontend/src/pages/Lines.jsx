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

    useEffect(() => {
        if (lines.length === 0) return

        lines.forEach((line) => {
            const folder = selectedDept === "SMT" ? "SMT" : "DIP"
            const fullPath = `../assets/Lines/${folder}/${line.name}.png`
            const imgUrl = imagesJson[fullPath]?.default

            if (imgUrl) {
                const img = new Image()
                img.src = imgUrl // Forzamos al navegador a cachearla de inmediato
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
            <div className="flex justify-center text-xl font-bold mb-1">
                <h1>
                    SELECT LINE
                </h1>
            </div>

                <div className="justify-center min-h-0 w-9/10 flex mx-8 items-center">
                    {loading ? (
                        <div className="text-gray-400 font-semibold text-lg animate-pulse">Loading lines...</div>
                    ) : (
                        <div className="flex justify-center h-9/10">
                            <ul
                                className="overflow-y-auto overflow-x-hidden scrollbar-thin  shrink-0 pr-2"
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

                        </div>
                    )}
                    <div className="h-9/10 w-6/10 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-6 overflow-hidden">
                        <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center">

                            {/* Capa Base: Imagen Neutral Siempre visible */}
                            <img
                                src={getImageUrl(null, selectedDept)}
                                alt={`Mapa Neutral ${selectedDept}`}
                                className="w-full h-full object-fill select-none pointer-events-none"
                            />

                            {/* Capas Pre-renderizadas: Todas están en el DOM, su opacidad cambia instantáneamente */}
                            {!loading && lines.map((line) => {
                                const imgUrl = getImageUrl(line.name, selectedDept)
                                if (!imgUrl) return null

                                return (
                                    <img
                                        key={line.id}
                                        src={imgUrl}
                                        alt={`Línea ${line.name}`}
                                        className={`absolute top-0 left-0 w-full h-full object-fill select-none pointer-events-none transition-opacity duration-75 ${activeLine === line.name ? "opacity-100 z-10" : "opacity-0 z-0"
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