import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import machine_icon from "../assets/machine2.png"
import bule_tag from "../assets/tag_blue_icon.png"
import bule_dot from "../assets/blue_location_icon.png"

export default function Machines() {
    const { lineId } = useParams()
    const [activeMachine, setActiveMachine] = useState(null)
    const navigate = useNavigate()


    const machines = ["1", "2", "3", "4"]

    const getImageUrl = (name) => {
        return new URL(`../assets/machine${name}.png`, import.meta.url).href
    }

    return (
        <div className="h-full">
            <div className="flex justify-center text-3xl font-bold my-2">
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
                            Machine {machine}
                        </li>
                    ))}
                </ul>
                <div className="w-1/3 shadow-md rounded-sm h-full bg-gray-50">
                    {activeMachine && (
                        <div className="h-full">
                            <h1 className="text-xl font-bold mt-2 mx-4">
                                Machine {activeMachine}
                            </h1>
                            <h5 className="text-sm mb-3 mx-4">
                                panasonic
                            </h5>
                            <div className="flex justify-center mb-4 mx-6 border-b border-gray-300 h-1/2">
                                <img className="mb-4" src={getImageUrl(activeMachine)} alt="machine" />
                            </div>
                            <div className="flex justify-around my-6">
                                <div>
                                    <div className="flex my-2">
                                        <img className="h-4 m-2" src={bule_tag} alt="tag" />
                                        <div>
                                            <h1 className="text-xs text-gray-500">
                                                Make
                                            </h1>
                                            <h5 className="font-bold">
                                                Panasonic
                                            </h5>
                                        </div>

                                    </div>
                                    <div className="flex my-2">
                                        <img className="h-4 m-2" src={bule_dot} alt="tag" />
                                        <div>
                                            <h1 className="text-xs text-gray-500">
                                                Location
                                            </h1>
                                            <h5 className="font-bold">
                                                SMT-L1
                                            </h5>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="flex my-2">
                                        <img className="h-4 m-2" src={bule_tag} alt="tag" />
                                        <div>
                                            <h1 className="text-xs text-gray-500">
                                                Model
                                            </h1>
                                            <h5 className="font-bold">
                                                NPM-D3A
                                            </h5>
                                        </div>

                                    </div>
                                    <div className="flex my-2">
                                        <img className="h-4 m-2" src={bule_dot} alt="tag" />
                                        <div>
                                            <h1 className="text-xs text-gray-500">
                                                Type
                                            </h1>
                                            <h5 className="font-bold">
                                                Printer
                                            </h5>
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