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
        <>
            <div className="flex justify-center">
                <h1>{lineId}</h1>
            </div>
            <div className="flex">
                <ul>
                    {machines.map((machine, index) => (
                        <li
                            key={index}
                            className="m-4 p-3 bg-gray-300 w-50 cursor-pointer"
                            onMouseEnter={() => setActiveMachine(machine)}
                            onMouseLeave={() => setActiveMachine(null)}
                            onClick={() => navigate(`/line/${lineId}/${machine}`)} 

                        >
                            {machine}
                        </li>
                    ))}
                </ul>
                <div>
                    {activeMachine && (
                        <img src={getImageUrl(activeMachine)} alt={activeMachine} />
                    )}
                </div>
            </div>
        </>
    )
}