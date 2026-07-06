import { useParams } from "react-router-dom"

export default function Machines() {
    const {lineId} = useParams()

    const machines = ["machine1", "machine2", "machine3", "machine4"]

    return(
        <div>
            <h1>{lineId} Machines</h1>
        </div>
    )
}