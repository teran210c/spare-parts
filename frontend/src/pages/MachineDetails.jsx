import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function MachineDetails() {
    const { lineId, machineId } = useParams()
    const [searchTerm, setSearchTerm] = useState("")
    const [spareParts, setSpareParts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [selectedPart, setSelectedPart] = useState(null)

    useEffect(() => {
            const fetchSpareParts = async () => {
                if (!machineId) return;
            
            try {
                // Llamamos al endpoint filtrado por el ID de la máquina
                const response = await fetch(`http://localhost:5267/api/sparepart/machine/${machineId}`);
                if (!response.ok) throw new Error("Error al traer los repuestos")
                
                const data = await response.json();
                setSpareParts(data);
            } catch (error) {
                console.error("Error en la petición de repuestos:", error)
            } finally {
                setLoading(false)
            }
        }
            fetchSpareParts()
    }, [machineId])

    console.log(spareParts)
    

    const filteredBoard = spareParts.filter((part) => {
        return (
            part.name.toLowerCase().startsWith(searchTerm.toLowerCase()) || part.serialNumber.startsWith()
        )
    }
    )

    return (
        <div className="flex flex-col items-center pb-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="m-4 text-5xl">{lineId}</h1>
                {/* <h3 className="text-xl">{machine}</h3> */}
            </div>
            <div className="flex w-5/6 mt-8">
                <div className="h-dvh w-180 overflow-y-auto ">
                    <form
                        onSubmit={e => e.preventDefault()}
                        
                    >
                        <div className="flex items-center border pl-3 pr-3 gap-2 bg-white border-gray-500/30 h-[30px] rounded-md overflow-hidden w-80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                            </svg>
                            <input
                                type="search" placeholder="Search part number or name"
                                className="w-70 outline-none text-gray-500 placeholder-gray-500 text-sm"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </form >
                    <ul>
                        {filteredBoard.map((part) => (
                            <li
                                key={part.id}
                                className="mt-3 p-3 bg-gray-300 flex-1 cursor-pointer"
                                onClick={() => setSelectedPart(part)}
                            >
                                <h1>{part.name}</h1>
                                <h4>{part.serialNumber}</h4>

                            </li>
                        ))}
                    </ul>
                </div>
                    {selectedPart && (
                        <div className="flex flex-col w-full h-auto mx-8 inset-shadow-sm px-8 py-4 rounded-sm">
                            <div>
                                <h1 className="text-3xl font-bold font-mono text-black-400">{selectedPart.serialNumber}</h1>
                                <h5 className="text-xl font-semibold mt-1 text-gray-600">{selectedPart.name}</h5>
                            </div>

                            <div className="mt-6 space-y-3 border-t border-slate-400 pt-4 text-sm">
                                <div className="flex">
                                    <span className="w-32 text-gray-600 font-semibold">Modelo:</span>
                                    <span>{selectedPart.model || "N/A"}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 text-gray-600 font-semibold">Proveedor:</span>
                                    <span>{selectedPart.source || "N/A"}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 text-gray-600 font-semibold">Dueño:</span>
                                    <span>{selectedPart.owner || "N/A"}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 text-gray-600 font-semibold">Encargado:</span>
                                    <span>{selectedPart.clerk || "N/A"}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 text-gray-600 font-semibold">Cantidad:</span>
                                    <span className="font-bold text-emerald-400">{selectedPart.quantity} piezas</span>
                                </div>
                                <div className="flex">
                                    <span className="w-32 text-gray-600 font-semibold">Tiempo de Vida:</span>
                                    <span>{selectedPart.lifeTime ? `${selectedPart.lifeTime} año(s)` : "N/A"}</span>
                                </div>
                            </div>
                        </div>
                    )}
                
            </div>
        </div>
    )
}