import { useState } from "react"
import { useParams } from "react-router-dom"

export default function MachineDetails() {
    const { lineId, machine } = useParams()
    const [searchTerm, setSearchTerm] = useState("")

    const parts = [
        { partNumber: "MCH-00123", partName: "Motor" },
        { partNumber: "MCH-00123", partName: "Motor" },
        { partNumber: "MCH-00123", partName: "Motor" }
    ]

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1>{lineId}</h1>
                <h3>{machine}</h3>
            </div>
            <div>
                <form
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="input-group input-group-sm mb-3">
                        <input
                            type="search"
                            placeholder="Search Part number"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="border"
                        />
                    </div>
                </form >
                <ul>
                    {parts.map((part, index) => (
                        <li
                            key={index}
                            className="m-2 p-3 bg-gray-300 w-50 cursor-pointer"
                        >
                            <h1>{part.partNumber}</h1>
                            <h4>{part.partName}</h4>
                            
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}