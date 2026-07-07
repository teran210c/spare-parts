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

            ],
            voltage: 24,
            power: 120,
            speed: 3000,
            torque: 0.38,
            type: "Sterpper Motor"

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
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="m-4 text-5xl">{lineId}</h1>
                <h3 className="text-xl">{machine}</h3>
            </div>
            <div className="flex w-5/6 mt-8">
                <div>
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
                        {filteredBoard.map((part, index) => (
                            <li
                                key={index}
                                className="mt-3 p-3 bg-gray-300 flex-1 cursor-pointer"
                                onClick={() => setSelectedPart(part)}
                            >
                                <h1>{part.partNumber}</h1>
                                <h4>{part.partName}</h4>

                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex ml-10 bg-gray-50 mr-8">


                    {selectedPart && (
                        <div className="ml-6 pr-16">
                            <div>
                                <div>
                                    <h1 className="text-3xl font-bold m-2">{selectedPart.partNumber}</h1>
                                    <h5 className="font-bold m-2">{selectedPart.partName}</h5>
                                </div>
                                <div className="flex">
                                    <h1 className="m-2">Category</h1>
                                    <h5 className="m-2">{selectedPart.category}</h5>
                                </div>
                                <div className="flex">
                                    <p className="m-2">Description</p>
                                    <p className="m-2">{selectedPart.description}</p>
                                </div>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mt-6 mb-3">
                                    SUPPLIERS
                                </h3>
                                <table className="w-full table-fixed border-collapse">
                                    <thead>
                                        <tr className="border-b  border-gray-300 text-left text-sm text-gray-500">
                                            <th className="w-1/4 py-2">Supplier</th>
                                            <th className="w-1/4 py-2">Part Number</th>
                                            <th className="w-1/4 py-2">Delivery Time</th>
                                            <th className="w-1/4 py-2">Contact</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {selectedPart.supplier.map((part, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-gray-300"
                                            >
                                                <td className="py-3">
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
                            <div>
                                <div className="flex">
                                    <h1 className="m-2">Voltage</h1>
                                    <h5 className="m-2">{selectedPart.voltage}</h5>
                                </div>
                                <div className="flex">
                                    <h1 className="m-2">Power</h1>
                                    <h5 className="m-2">{selectedPart.power}</h5>
                                </div>
                                <div className="flex">
                                    <h1 className="m-2">Speed</h1>
                                    <h5 className="m-2">{selectedPart.speed}</h5>
                                </div>
                                <div className="flex">
                                    <h1 className="m-2">Torque</h1>
                                    <h5 className="m-2">{selectedPart.voltage}</h5>
                                </div>
                                <div className="flex">
                                    <h1 className="m-2">Type</h1>
                                    <h5 className="m-2">{selectedPart.type}</h5>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}