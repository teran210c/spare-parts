import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import machine_icon from "../assets/machine2.png"

export default function Machines() {
    const { lineId } = useParams()
    const [activeMachine, setActiveMachine] = useState(null)
    const [machineImg, setMachineImg] = useState(null)
    const navigate = useNavigate()


    const machines = ["machine1", "machine2", "machine3", "machine4"]

    const getImageUrl = (name) => {
        return new URL(`../assets/${name}.png`, import.meta.url).href
    }

    const image = () => setMachineImg(activeMachine)

    return (
        <div className="h-full">
            <div className="flex justify-center text-xl font-bold my-2">
                <h1>{lineId}</h1>
            </div>
            <div className="flex justify-center">
                <ul>
                    {machines.map((machine, index) => (
                        <li
                            key={index}
                            className="flex items-center h-15 w-76 mb-4 mr-4 p-3 bg-gray-50 w-50 rounded-lg shadow-md cursor-pointer duration-200 hover:bg-blue-100"
                            onMouseEnter={() => setActiveMachine(machine)}
                            onClick={() => navigate(`/line/${lineId}/${machine}`)} 

                        >
                            <img className="h-full mr-2" src={machine_icon} alt="" />
                            {machine}
                        </li>
                    ))}
                </ul>
                <div className="w-1/2 shadow-md rounded-sm h-full bg-gray-50">
                    {activeMachine && (
                        <div className="h-full">
                           <h1 className="text-xl font-bold my-2 mx-4">
                                {activeMachine}
                           </h1>
                           <h5 className="text-sm mb-3 mx-4">
                                panasonic
                           </h5>
                           <div className="flex justify-center mb-4 mx-6 border-b border-gray-300 h-1/2">
                                <img className="mb-4" src={getImageUrl(activeMachine)} alt="" />
                           </div>
                           <div className="flex m-4">
                                <div>
                                    <div>
                                        <h1>
                                            Make
                                        </h1>
                                        <h5>
                                            Panasonic
                                        </h5>
                                    </div>
                                    <div>
                                        <h1>
                                            Location
                                        </h1>
                                        <h5>
                                            SMT-L1
                                        </h5>
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <h1>
                                            Modelo
                                        </h1>
                                        <h5>
                                            NPM-D3A
                                        </h5>
                                    </div>
                                    <div>
                                        <h1>
                                            Type
                                        </h1>
                                        <h1>
                                            Printer
                                        </h1>
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