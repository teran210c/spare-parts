import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function Machines() {
    const { lineId } = useParams()
    const [activeMachine, setActiveMachine] = useState(null)
    const [machineImg, setMachineImg] = useState(null)
    const navigate = useNavigate()


    const machines = ["machine1", "machine2", "machine3", "machine4"]

    const getImageUrl = (name) => {
        return new URL(`../assets/${name}.png`, import.meta.url).href
    }

    console.log(activeMachine)

    const image = () => setMachineImg(activeMachine)

    return (
        <div>
            <div >
                <h1>{lineId}</h1>
            </div>
            <div className="flex justify-center">
                <ul>
                    {machines.map((machine, index) => (
                        <li
                            key={index}
                            className="flex items-center h-20 w-96 mb-4 mr-4 p-3 bg-gray-50 w-50 rounded-lg shadow-md cursor-pointer duration-200 hover:bg-blue-100"
                            onMouseEnter={() => setActiveMachine(machine)}
                            onClick={() => navigate(`/line/${lineId}/${machine}`)} 

                        >
                            {machine}
                        </li>
                    ))}
                </ul>
                <div className="w-1/2 shadow-md rounded-sm">
                    {activeMachine && (
                        <div>
                            <h1 className="font-bold text-2xl m-2">
                                {activeMachine}
                            </h1>
                            <p className="m-2">
                                Name
                            </p>
                            <div className="flex justify-center py-10 border-b border-b-gray-200">
                                <img src={getImageUrl(activeMachine)} alt={activeMachine} />
                            </div>
                            <div className="flex gap-4 m-10">
                                <div className="flex flex-col gap-4 mr-12">
                                    <div>
                                        <h1>
                                            Make
                                        </h1>
                                        <h1>
                                            Make name
                                        </h1>
                                    </div>
                                    <div>
                                        <h1>
                                            Location
                                        </h1>
                                        <h1>
                                            {lineId}
                                        </h1>

                                    </div>
                                    <div>
                                        <h1>
                                            Description
                                        </h1>
                                        <h1>
                                            Machine Description
                                        </h1>

                                    </div>

                                </div>
                                <div className="flex flex-col gap-4 mr-12">
                                    <div>
                                        <h1>
                                            Model
                                        </h1>
                                        <h1>
                                            Model name
                                        </h1>
                                    </div>
                                    <div>
                                        <h1>
                                            Type
                                        </h1>
                                        <h1>
                                            Printer
                                        </h1>

                                    </div>
                                    <div>
                                        

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