import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function Machines() {
    const { lineId } = useParams()
    const [dbMachines, setDbMachines] = useState([])
    const [activeMachine, setActiveMachine] = useState(null)
    const [machineImg, setMachineImg] = useState(null)
    const navigate = useNavigate()

    const getImageUrl = (name) => {
        return new URL(`../assets/${name}.png`, import.meta.url).href
    }

    useEffect(() => {
        const fetchMachines = async () => {
            try {
                // Apuntamos a la URL de tu backend (Asegúrate de verificar el puerto de tu API)
                const response = await fetch("http://localhost:5267/api/machine")
                if (!response.ok) throw new Error("Error en la respuesta del servidor")

                const data = await response.json()
                setDbMachines(data) // Guardamos la lista de máquinas en el estado
            } catch (error) {
                console.error("Error al conectar con el backend en C#:", error)
            }
        }

        fetchMachines()
    }, [])

    const filteredMachines = dbMachines.filter(machine => machine.dept === "DIP");


    const image = () => setMachineImg(activeMachine)

    return (
        <>
            <div className="flex justify-center">
                <h1>{lineId}</h1>
            </div>
            <div className="flex">
                <ul>
                    {filteredMachines.length === 0 ? (
                        <p className="text-gray-400 m-4">No hay máquinas asignadas a esta línea.</p>
                    ) : (
                        filteredMachines.map((machine) => (
                            <li
                                key={machine.id}
                                className="m-4 p-3 bg-gray-300 w-50 cursor-pointer font-semibold rounded shadow-sm hover:bg-gray-400 transition-colors"
                                onMouseEnter={() => setActiveMachine(machine.name)} 
                                onMouseLeave={() => setActiveMachine(null)}
                                onClick={() => navigate(`/line/${lineId}/${machine.id}`)} 
                            >
                                {machine.name} <span className="text-xs text-gray-600 block">({machine.brand})</span>
                            </li>
                        ))
                    )}
                </ul>

                {/* Previsualizador de imagen al pasar el mouse */}
                <div className="ml-8 flex items-center justify-center">
                    {activeMachine && (
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                            <img src={getImageUrl(activeMachine)} alt={activeMachine} className="max-h-60 object-contain" />
                            <p className="text-center text-xs text-gray-400 mt-2 font-mono">{activeMachine}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}