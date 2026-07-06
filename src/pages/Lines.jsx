export default function Lines() {
    const lines = ["SMT-L1", "SMT-L2", "SMT-L3", "SMT-L5"]
    return (
        <div className="flex min-h-screen items-center">
            <ul>
                {lines.map((line, index) => (
                    <li
                        key={index}
                        className="m-4 p-3 bg-gray-300 w-50 text"
                    >
                        {line}
                    </li>

                ))}
            </ul>
            {/* futuro componente */}
            <div className="flex flex-col items-center justify-center bg-gray-200 h-100 w-100">
                <div id="L1-square" className="bg-gray-50 h-1/6 w-9/10 m-2">

                </div>
                <div id="L2-square" className="bg-gray-50 h-1/6 w-9/10 m-2">

                </div>
                <div id="L3-square" className="bg-gray-50 h-1/6 w-9/10 m-2">

                </div>
                <div id="L5-square" className="bg-gray-50 h-1/6 w-9/10 m-2">

                </div>

            </div>
        </div>
    )
}