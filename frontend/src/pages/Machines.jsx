import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import machine_icon from "../assets/machine2.png"
import bule_tag from "../assets/tag_blue_icon.png"
import bule_dot from "../assets/blue_location_icon.png"

export default function Machines() {
    const { lineId } = useParams()
    const [machines, setMachines] = useState([])
    const [activeMachine, setActiveMachine] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        // Hacemos el fetch a la ruta singular que probamos en Postman
        fetch(`http://localhost:5267/api/machine?lineId=${lineId}`)
            .then((res) => {
                if (!res.ok) throw new Error("Error al obtener las máquinas")
                return res.json()
            })
            .then((data) => {
                setMachines(data)
                // Opcional: Seleccionar automáticamente la primera máquina para que no empiece vacío
                if (data.length > 0) setActiveMachine(data[0])
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [lineId])

    const getImageUrl = (name) => {
        return new URL(`../assets/machine${name}.png`, import.meta.url).href
    }

      if (loading) {
        return <div className="flex justify-center items-center h-full text-xl font-bold">Loading Machine...</div>
    }

    return (
        <div className="h-full">
            <div className="flex justify-center text-3xl font-bold my-2">
                {lineId === "4" ? <h1>SMT-L5</h1> : <h1>SMT-L{lineId}</h1>}
            </div>
            <div className="flex justify-center">
                <ul>
                    {machines.map((machine) => (
                        <li
                            key={machine.id}
                            className="flex items-center h-15 w-76 mb-4 mr-4 p-3 bg-gray-50 w-50 rounded-lg shadow-md cursor-pointer duration-200 hover:bg-blue-100"
                            onMouseEnter={() => setActiveMachine(machine)}
                            onClick={() => navigate(`/line/${lineId}/${machine.id}`)}

                        >
                            <img className="h-full mr-2" src={machine_icon} alt="" />
                            {machine.name}
                        </li>
                    ))}
                </ul>
                <div className="w-1/3 shadow-md rounded-sm h-full bg-gray-50">
                    {activeMachine && (
                        <div className="h-full">
                            <h1 className="text-xl font-bold mt-2 mx-4">
                                {activeMachine.name}
                            </h1>
                            <h5 className="text-sm mb-3 mx-4 text-gray-400 uppercase">
                                {activeMachine.brand || "Generic"}
                            </h5>
                            <div className="flex justify-center mb-4 mx-6 border-b border-gray-300 h-48 overflow-hidden">
                                <img className="mb-4 object-contain h-full" src={getImageUrl(activeMachine.name)} alt="machine" />
                            </div>
                            <div className="flex justify-around my-6">
                                <div>
                                    <div className="flex my-2">
                                        <img className="h-4 m-2" src={bule_tag} alt="tag" />
                                        <div>
                                            <h1 className="text-xs text-gray-500">Make</h1>
                                            <h5 className="font-bold">{activeMachine.brand || "Generic"}</h5>
                                        </div>
                                    </div>
                                    <div className="flex my-2">
                                        <img className="h-4 m-2" src={bule_dot} alt="tag" />
                                        <div>
                                            <h1 className="text-xs text-gray-500">Line Code</h1>
                                            <h5 className="font-bold">ID: {lineId}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex my-2">
                                        <img className="h-4 m-2" src={bule_tag} alt="tag" />
                                        <div>
                                            <h1 className="text-xs text-gray-500">System ID</h1>
                                            <h5 className="font-bold">#{activeMachine.id}</h5>
                                        </div>
                                    </div>
                                    <div className="flex my-2">
                                        <img className="h-4 m-2" src={bule_dot} alt="tag" />
                                        <div>
                                            <h1 className="text-xs text-gray-500">Type</h1>
                                            <h5 className="font-bold">{activeMachine.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}