import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import imgUrl from "../assets/machine3.png"

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
                // Endpoint apuntando al puerto e ID de máquina correspondientes
                const response = await fetch(`http://localhost:5267/api/sparepart/machine/${machineId}`);
                if (!response.ok) throw new Error("Error al traer los repuestos")

                const data = await response.json();
                setSpareParts(data);

                // Selecciona el primer repuesto por defecto si existen registros
                if (data.length > 0) {
                    setSelectedPart(data[0]);
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
        // Aseguramos que el nombre exista y lo pasamos a minúsculas
        const nameMatch = part.name ? part.name.toLowerCase().includes(searchTerm.toLowerCase()) : false;

        // Convertimos el número de serie a un String de forma segura antes de buscar
        const serialStr = part.serialNumber ? String(part.serialNumber) : "";
        const serialMatch = serialStr.includes(searchTerm);

        return nameMatch || serialMatch;
    });


    return (
        <div className="flex flex-col items-center h-full">
            <div className="flex flex-col items-center justify-center">
                <h1 className="m-4 text-3xl font-bold">{lineId}</h1>
                {/* <h3 className="text-xl">{machine}</h3> */}
            </div>
            <div className="flex w-5/6 mt-2">
                <div className="w-180 overflow-y-auto">
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
                    <ul
                        className="h-90 overflow-y-auto scrollbar-thin sin-flechas w-80"
                        style={{ direction: 'rtl' }}
                    >
                        {filteredBoard.map((part) => (
                            <li
                                key={part.id}
                                className="mt-1 p-3 bg-stone-100 shadow-sm flex-1 cursor-pointer rounded-sm"
                                style={{ direction: 'ltr' }}
                                onClick={() => setSelectedPart(part)}
                            >
                                <h1>{part.name}</h1>
                                <h4>{part.serialNumber}</h4>

                            </li>
                        ))}
                    </ul>
                </div>
                {selectedPart && (
                    <div className="flex flex-col w-full h-100 shadow-sm pl-20 rounded-sm">

                        <div className="flex h-4/9 mb-6 border-b border-gray-300">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-3xl font-bold font-mono text-black-400">{selectedPart.serialNumber}</h1>
                                <h5 className="text-xl font-semibold mt-1 text-gray-600">{selectedPart.name}</h5>
                            </div>

                            <img className="h-9/10" src={imgUrl} alt="sparepart" />
                        </div>
                        <table className="text-sm text-left rtl:text-right w-2/3">
                            <tbody>
                                <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                    <td>
                                        Model
                                    </td>
                                    <td>
                                        <span>{selectedPart.model || "N/A"}</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                    <td>
                                        Supplier
                                    </td>
                                    <td>
                                        <span>{selectedPart.source || "N/A"}</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                    <td>
                                        Owner
                                    </td>
                                    <td>
                                        <span>{selectedPart.owner || "N/A"}</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                    <td>
                                        Clerk
                                    </td>
                                    <td>
                                        <span>{selectedPart.clerk || "N/A"}</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                    <td>
                                        Amount
                                    </td>
                                    <td>
                                        <span className="font-bold text-emerald-400">{selectedPart.quantity} piezas</span>

                                    </td>
                                </tr>
                                <tr className="border-gray-300 hover:bg-zinc-200 cursor-pointer h-8">
                                    <td>
                                        Life Span
                                    </td>
                                    <td>
                                        <span>{selectedPart.lifeTime ? `${selectedPart.lifeTime} año(s)` : "N/A"}</span>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div >
    )
}