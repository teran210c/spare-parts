import { useState } from "react"
import { useParams } from "react-router-dom"

export default function MachineDetails() {
    const { lineId, machine } = useParams()
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedPart, setSelectedPart] = useState(null)

    const parts = [
        {
            partNumber: "MCH-00123",
            partName: "Motor Charger",
            category: "Mechanical",
            location: "Charger",
            description: "Motor for machine engine",
            supplier: [
                {
                    name: "PEGATRON SUPPLY",
                    supplierPartNumber: 'MCH-00123-PG',
                    deliverytime: "5-7 days",
                    contact: "provider@email.com"
                },
                {
                    name: "MISUMI",
                    supplierPartNumber: 'MCH-00123-MS',
                    deliverytime: "7-10 days",
                    contact: "provider@misumi.com"
                },
                {
                    name: "MOUSER",
                    supplierPartNumber: 'MCH-00123-MR',
                    deliverytime: "3-5 days",
                    contact: "provider@mouser.com"
                }

            ]

        },
        { partNumber: "SEN-00456", partName: "Optic Sensor" },
        { partNumber: "BEL-00789", partName: "Belt Conveyor" },
        { partNumber: "PLC-01234", partName: "PLC Driver" },
        { partNumber: "PWR-05678", partName: "Power Source" },
        { partNumber: "ROL-00987", partName: "Transporting Roll" }

    ]

    const filteredBoard = parts.filter((part) => {
        return (
            part.partNumber.toLowerCase().startsWith(searchTerm.toLowerCase()) || part.partName.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
    }
    )


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
                            placeholder="Search Part Number or Name"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="border w-60"
                        />
                    </div>
                </form >
                <div className="flex">
                    <ul>
                        {filteredBoard.map((part, index) => (
                            <li
                                key={index}
                                className="m-2 p-3 bg-gray-300 w-50 cursor-pointer"
                                onClick={() => setSelectedPart(part)}
                            >
                                <h1>{part.partNumber}</h1>
                                <h4>{part.partName}</h4>

                            </li>
                        ))}
                    </ul>

                    {selectedPart && (
                        <div>
                            <div>
                                <h1>{selectedPart.partNumber}</h1>
                                <h5>{selectedPart.partName}</h5>
                            </div>
                            <div className="flex">
                                <p className="m-2">Category</p>
                                <p className="m-2">Mechanical</p>
                            </div>
                            <div>
                                <h3>SUPPLIER</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Supplier</th>
                                            <th>Part Number</th>
                                            <th>Delivery Time</th>
                                            <th>Contact</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            {selectedPart.supplier.map((part, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {part.name}
                                                    </td>
                                                    <td>
                                                        {part.supplierPartNumber}
                                                    </td>
                                                    <td>
                                                        {part.deliverytime}
                                                    </td>
                                                    <td>
                                                        {part.contact}
                                                    </td>
                                                </tr>
                                            ))}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}