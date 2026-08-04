import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import imgUrl from "../assets/machine3.png"

export default function MachineDetails() {
    const { lineId, machineId } = useParams()
    const [searchTerm, setSearchTerm] = useState("")
    const [spareParts, setSpareParts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedPart, setSelectedPart] = useState(null)

    useEffect(() => {
        const fetchSpareParts = async () => {
            if (!machineId) return
            try {
                const response = await fetch(`http://localhost:5267/api/sparepart/machine/${machineId}`)
                if (!response.ok) throw new Error("Error al traer los repuestos")

                const data = await response.json()
                setSpareParts(data)

                if (data.length > 0) {
                    setSelectedPart(data[0])
                }
            } catch (error) {
                console.error("Error en la petición de repuestos:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchSpareParts()
    }, [machineId])

    const filteredBoard = spareParts.filter((part) => {
        // Buscamos de manera segura por número de parte o por descripción
        const descriptionMatch = part.descriptionUsa ? part.descriptionUsa.toLowerCase().includes(searchTerm.toLowerCase()) : false
        const partNumberMatch = part.partNumberMpx ? part.partNumberMpx.toLowerCase().includes(searchTerm.toLowerCase()) : false
        
        return descriptionMatch || partNumberMatch
    })

    return (
    <div>
        {loading ? (
            <div className="text-gray-400 font-semibold text-lg animate-pulse p-6">
                Loading lines...
            </div>
        ) : !spareParts || spareParts.length === 0 ? (
            // Controlamos explícitamente el caso de que el arreglo llegue vacío
            <div className="text-gray-400 font-semibold text-lg p-6 text-center">
                No spare parts data available.
            </div>
        ) : (
            <div className="flex flex-col items-center h-full">
                <div className="flex flex-col items-center justify-center">
                    {/* Protegido con encadenamiento opcional (?.) por seguridad */}
                    <h1 className="mt-4 text-3xl font-bold">
                        {spareParts[0]?.machineModels?.[0]?.name || "Unknown Machine"}
                    </h1>
                    <h3 className="text-xl mb-2">
                        {spareParts[0]?.machineModels?.[0]?.brand || "Unknown Brand"}
                    </h3>
                </div>
                
                <div className="flex justify-center space-x-6 w-5/6 mt-2">
                    <div className="overflow-y-auto">
                        <form onSubmit={e => e.preventDefault()}>
                            <div className="flex items-center border pl-3 pr-3 gap-2 bg-white border-gray-500/30 h-[30px] rounded-md overflow-hidden w-80">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                                    <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                                </svg>
                                <input
                                    type="search" placeholder="Search part number or name"
                                    className="w-70 outlinenone text-gray-500 placeholder-gray-500 text-sm"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </form >
                        
                        <ul className="h-90 overflow-y-auto scrollbar-thin w-80" style={{ direction: 'rtl' }}>
                            {filteredBoard?.map((part) => (
                                <li
                                    key={part.id}
                                    className="mt-1 p-3 bg-stone-100 shadow-sm cursor-pointer rounded-sm"
                                    style={{ direction: 'ltr' }}
                                    onClick={() => setSelectedPart(part)}
                                >
                                    <h1 className="font-bold">{part.descriptionUsa}</h1>
                                    <h4 className="text-xs">{part.partNumberMpx}</h4>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {selectedPart && (
                        <div className="flex flex-col items-center justify-center w-3/6 h-100 shadow-sm rounded-sm">
                            <div className="flex items-center h-4/9 w-6/8 border-b border-gray-300">
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-xl font-bold font-mono text-black-400">{selectedPart.partNumberMpx}</h1>
                                    <h5 className="text-md font-semibold mt-1 text-gray-600">{selectedPart.descriptionUsa}</h5>
                                </div>
                                <img className="h-7/10" src={imgUrl} alt="sparepart" />
                            </div>
                           
                            <table className="text-sm text-left rtl:text-right w-2/3 mb-6">
                                <tbody>
                                    <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                        <td className="font-semibold text-gray-500">P/N MPX</td>
                                        <td><span className="font-medium">{selectedPart.partNumberMpx || "N/A"}</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                        <td className="font-semibold text-gray-500">P/N Supplier</td>
                                        <td><span>{selectedPart.partNumberSupplier || "N/A"}</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                        <td className="font-semibold text-gray-500">Brand</td>
                                        <td><span>{selectedPart.brand || "N/A"}</span></td>
                                    </tr>
                                    <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                        <td className="font-semibold text-gray-500">Stock Limits</td>
                                        <td>
                                            <span className="text-gray-600">
                                                Min: <strong className="text-gray-900">{selectedPart.minStock}</strong> |
                                                Max: <strong className="text-gray-900">{selectedPart.maxStock}</strong>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                        <td className="font-semibold text-gray-500">Stock (INV)</td>
                                        <td>
                                            <span className={`font-bold ${selectedPart.quantity === 0 ? "text-red-500" : "text-emerald-500"}`}>
                                                {selectedPart.quantity} {selectedPart.quantity === 1 ? "pieza" : "piezas"}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                        <td className="font-semibold text-gray-500">Status</td>
                                        <td>
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                                                selectedPart.status === 'In stock' ? 'bg-green-100 text-green-700' :
                                                selectedPart.status === 'Reorder' ? 'bg-amber-100 text-amber-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                                {selectedPart.status || "N/A"}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        )}
    </div>
)
}