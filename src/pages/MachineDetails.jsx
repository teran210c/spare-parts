import { useState } from "react"
import { useParams } from "react-router-dom"

export default function MachineDetails() {
    const { lineId, machine } = useParams()
    const [searchTerm, setSearchTerm] = useState("")

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

            </div>
        </div>
    )
}