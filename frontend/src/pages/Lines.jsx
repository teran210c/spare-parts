import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Lines() {
    const [activeLine, setActiveLine] = useState(null)
    const navigate = useNavigate()

    const lines = ["SMT-L5", "SMT-L3", "SMT-L2", "SMT-L1"]

    console.log(activeLine)
    return (
        <div className="flex flex-1 min-h-screen items-center justify-center">

            <ul>
                {lines.map((line, index) => (
                    <li
                        key={index}
                        className="m-4 p-3 bg-gray-300 w-50 cursor-pointer"
                        onMouseEnter={() => setActiveLine(line)}
                        onMouseLeave={() => setActiveLine(null)}
                        onClick={() => navigate(`/line/${line}`)}
                    >
                        {line}
                    </li>

                ))}
            </ul>

            <div className="flex flex-col items-center justify-center bg-gray-200 h-126 w-180 m-4 rounded-sm">
                {/* line 5 */}
                <div className={`flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg shadow-lg h-26 w-full max-w-2xl m-2 overflow-x-auto transition-opacity duration-300 ${activeLine === "SMT-L5" ? "opacity-100" : "opacity-40"}`}>

                    {/* 1. Loader / Entrada (Cuadrado original pequeño) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-gray-400 font-mono">LOADER</span>
                        <div className="w-5 h-5 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                    </div>

                    {/* Conveyor 1 */}
                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* 2. Solder Paste Printer (Rectángulo mediano) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-emerald-400 font-mono">PRINTER</span>
                        <div className="w-12 h-8 border-2 border-emerald-500 bg-emerald-950/50 flex items-center justify-center rounded-sm">
                            <div className="w-8 h-0.5 bg-emerald-400 animate-pulse"></div> {/* Simulación de wiper */}
                        </div>
                    </div>

                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* Conveyor 2 (Tus divs apilados: Conveyor de doble carril o SPI) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 mx-1">
                        <span className="text-[10px] text-gray-500 font-mono">SPI</span>
                        <div className="flex flex-col gap-0.5 justify-center p-1 bg-slate-700/50 rounded">
                            <div className="w-8 h-3 border-2 border-blue-500 bg-blue-900/30"></div>
                            <div className="w-8 h-3 border-2 border-blue-500 bg-blue-900/30"></div>
                        </div>
                    </div>

                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* 3. NPM / Pick & Place (Máquina grande de montaje) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-amber-400 font-mono">NPM P&P</span>
                        {/* Ajuste clave: Reducción a w-40 y h-11 para contener los sub-módulos sin romper el alto de la línea */}
                        <div className="w-40 h-11 border-2 border-amber-500 bg-amber-950/50 flex flex-col flex-wrap gap-0.5 p-1 items-center justify-center rounded-sm">
                            {/* Módulos internos / cabezales de la NPM */}
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                        </div>
                    </div>

                    {/* Conveyor 3 */}
                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* 4. Reflow Oven (Horno - Bloque largo con zonas de calor) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-red-400 font-mono">REFLOW OVEN</span>
                        <div className="w-24 h-8 border-2 border-red-500 bg-red-950/50 flex items-center justify-around px-1 rounded-sm">
                            {/* Simulación de zonas de calor (Preheat, Reflow, Cooling) */}
                            <div className="w-4 h-5 bg-orange-600/40 rounded-sm"></div>
                            <div className="w-4 h-5 bg-red-600/50 rounded-sm"></div>
                            <div className="w-4 h-5 bg-red-600/50 rounded-sm"></div>
                            <div className="w-4 h-5 bg-cyan-600/40 rounded-sm"></div>
                        </div>
                    </div>

                    {/* Conveyor 4 */}
                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* 5. Unloader / Salida */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-gray-400 font-mono">UNLOADER</span>
                        <div className="w-5 h-5 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                    </div>

                </div>

                {/* line 3 */}
                {/* CAMBIO: Se cambió h-32 a h-36 para acomodar los dos carriles cómodamente y se activó overflow-x-auto */}
                <div className={`flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg shadow-lg h-26 w-full max-w-2xl m-2 overflow-x-auto overflow-y-hidden transition-opacity duration-300 ${activeLine === "SMT-L3" ? "opacity-100" : "opacity-40"}`}>

                    {/* 1. Loader / Entrada (Doble carril apilado) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="text-[10px] text-gray-400 font-mono">LOADER</span>
                            <div className="w-4 h-4 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                            {/* Espaciador sutil entre carriles */}
                            <div className="h-2"></div>
                            <div className="w-4 h-4 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                        </div>
                    </div>

                    {/* Conveyor 1 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* 2. Solder Paste Printer (Doble) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-emerald-400 font-mono">PRINTER</span>
                            <div className="w-10 h-6 border-2 border-emerald-500 bg-emerald-950/50 flex items-center justify-center rounded-sm">
                                <div className="w-6 h-0.5 bg-emerald-400 animate-pulse"></div>
                            </div>
                            <div className="h-1.5"></div>
                            <div className="w-10 h-6 border-2 border-emerald-500 bg-emerald-950/50 flex items-center justify-center rounded-sm">
                                <div className="w-6 h-0.5 bg-emerald-400 animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Conveyor 2 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* SPI (Doble) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-gray-500 font-mono">SPI</span>
                            <div className="flex flex-col gap-0.5 justify-center p-0.5 bg-slate-700/50 rounded">
                                <div className="w-8 h-2.5 border border-blue-500 bg-blue-900/30"></div>
                                <div className="w-8 h-2.5 border border-blue-500 bg-blue-900/30"></div>
                            </div>
                            <div className="h-1"></div>
                            <div className="flex flex-col gap-0.5 justify-center p-0.5 bg-slate-700/50 rounded">
                                <div className="w-8 h-2.5 border border-blue-500 bg-blue-900/30"></div>
                                <div className="w-8 h-2.5 border border-blue-500 bg-blue-900/30"></div>
                            </div>
                        </div>
                    </div>

                    {/* Conveyor 3 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* 3. NPM / Pick & Place (Doble - Reducido de w-48 a w-36 y h-12 a h-9) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-amber-400 font-mono">NPM P&P</span>
                            <div className="w-36 h-9 border-2 border-amber-500 bg-amber-950/50 flex flex-wrap gap-0.5 p-0.5 items-center justify-center rounded-sm">
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            </div>
                            <div className="h-1.5"></div>
                            <div className="w-36 h-9 border-2 border-amber-500 bg-amber-950/50 flex flex-wrap gap-0.5 p-0.5 items-center justify-center rounded-sm">
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Conveyor 4 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* 4. Reflow Oven (Doble - Reducido de w-28 a w-24 y h-10 a h-8) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-red-400 font-mono">REFLOW OVEN</span>
                            <div className="w-24 h-7 border-2 border-red-500 bg-red-950/50 flex items-center justify-around px-0.5 rounded-sm">
                                <div className="w-3 h-4 bg-orange-600/40 rounded-sm"></div>
                                <div className="w-3 h-4 bg-red-600/50 rounded-sm"></div>
                                <div className="w-3 h-4 bg-cyan-600/40 rounded-sm"></div>
                            </div>
                            <div className="h-1.5"></div>
                            <div className="w-24 h-7 border-2 border-red-500 bg-red-950/50 flex items-center justify-around px-0.5 rounded-sm">
                                <div className="w-3 h-4 bg-orange-600/40 rounded-sm"></div>
                                <div className="w-3 h-4 bg-red-600/50 rounded-sm"></div>
                                <div className="w-3 h-4 bg-cyan-600/40 rounded-sm"></div>
                            </div>
                        </div>
                    </div>

                    {/* Conveyor 5 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* 5. Unloader / Salida (Doble) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="text-[10px] text-gray-400 font-mono">UNLOADER</span>
                            <div className="w-4 h-4 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                            <div className="h-2"></div>
                            <div className="w-4 h-4 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                        </div>
                    </div>

                </div>


                {/* line  2*/}
                <div className={`flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg shadow-lg h-26 w-full max-w-2xl m-2 overflow-x-auto transition-opacity duration-300 ${activeLine === "SMT-L2" ? "opacity-100" : "opacity-40"}`}>

                    {/* 1. Loader / Entrada (Cuadrado original pequeño) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-gray-400 font-mono">LOADER</span>
                        <div className="w-5 h-5 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                    </div>

                    {/* Conveyor 1 */}
                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* 2. Solder Paste Printer (Rectángulo mediano) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-emerald-400 font-mono">PRINTER</span>
                        <div className="w-12 h-8 border-2 border-emerald-500 bg-emerald-950/50 flex items-center justify-center rounded-sm">
                            <div className="w-8 h-0.5 bg-emerald-400 animate-pulse"></div> {/* Simulación de wiper */}
                        </div>
                    </div>

                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* Conveyor 2 (Tus divs apilados: Conveyor de doble carril o SPI) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 mx-1">
                        <span className="text-[10px] text-gray-500 font-mono">SPI</span>
                        <div className="flex flex-col gap-0.5 justify-center p-1 bg-slate-700/50 rounded">
                            <div className="w-8 h-3 border-2 border-blue-500 bg-blue-900/30"></div>
                            <div className="w-8 h-3 border-2 border-blue-500 bg-blue-900/30"></div>
                        </div>
                    </div>

                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* 3. NPM / Pick & Place (Máquina grande de montaje) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-amber-400 font-mono">NPM P&P</span>
                        {/* Ajuste clave: Reducción a w-40 y h-11 para contener los sub-módulos sin romper el alto de la línea */}
                        <div className="w-40 h-11 border-2 border-amber-500 bg-amber-950/50 flex flex-col flex-wrap gap-0.5 p-1 items-center justify-center rounded-sm">
                            {/* Módulos internos / cabezales de la NPM */}
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            <div className="w-6 h-3 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                        </div>
                    </div>

                    {/* Conveyor 3 */}
                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* 4. Reflow Oven (Horno - Bloque largo con zonas de calor) */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-red-400 font-mono">REFLOW OVEN</span>
                        <div className="w-24 h-8 border-2 border-red-500 bg-red-950/50 flex items-center justify-around px-1 rounded-sm">
                            {/* Simulación de zonas de calor (Preheat, Reflow, Cooling) */}
                            <div className="w-4 h-5 bg-orange-600/40 rounded-sm"></div>
                            <div className="w-4 h-5 bg-red-600/50 rounded-sm"></div>
                            <div className="w-4 h-5 bg-red-600/50 rounded-sm"></div>
                            <div className="w-4 h-5 bg-cyan-600/40 rounded-sm"></div>
                        </div>
                    </div>

                    {/* Conveyor 4 */}
                    <div className="w-6 h-1.5 bg-gray-600 rounded-full flex-shrink-0 mt-4"></div>

                    {/* 5. Unloader / Salida */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-[10px] text-gray-400 font-mono">UNLOADER</span>
                        <div className="w-5 h-5 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                    </div>

                </div>

                {/* line 1 */}
                {/* CAMBIO: Se cambió h-32 a h-36 para acomodar los dos carriles cómodamente y se activó overflow-x-auto */}
                <div className={`flex items-center justify-center gap-2 bg-slate-800 p-3 rounded-lg shadow-lg h-26 w-full max-w-2xl m-2 overflow-x-auto overflow-y-hidden transition-opacity duration-300 ${activeLine === "SMT-L1" ? "opacity-100" : "opacity-40"}`}>

                    {/* 1. Loader / Entrada (Doble carril apilado) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="text-[10px] text-gray-400 font-mono">LOADER</span>
                            <div className="w-4 h-4 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                            {/* Espaciador sutil entre carriles */}
                            <div className="h-2"></div>
                            <div className="w-4 h-4 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                        </div>
                    </div>

                    {/* Conveyor 1 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* 2. Solder Paste Printer (Doble) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-emerald-400 font-mono">PRINTER</span>
                            <div className="w-10 h-6 border-2 border-emerald-500 bg-emerald-950/50 flex items-center justify-center rounded-sm">
                                <div className="w-6 h-0.5 bg-emerald-400 animate-pulse"></div>
                            </div>
                            <div className="h-1.5"></div>
                            <div className="w-10 h-6 border-2 border-emerald-500 bg-emerald-950/50 flex items-center justify-center rounded-sm">
                                <div className="w-6 h-0.5 bg-emerald-400 animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Conveyor 2 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* SPI (Doble) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-gray-500 font-mono">SPI</span>
                            <div className="flex flex-col gap-0.5 justify-center p-0.5 bg-slate-700/50 rounded">
                                <div className="w-8 h-2.5 border border-blue-500 bg-blue-900/30"></div>
                                <div className="w-8 h-2.5 border border-blue-500 bg-blue-900/30"></div>
                            </div>
                            <div className="h-1"></div>
                            <div className="flex flex-col gap-0.5 justify-center p-0.5 bg-slate-700/50 rounded">
                                <div className="w-8 h-2.5 border border-blue-500 bg-blue-900/30"></div>
                                <div className="w-8 h-2.5 border border-blue-500 bg-blue-900/30"></div>
                            </div>
                        </div>
                    </div>

                    {/* Conveyor 3 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* 3. NPM / Pick & Place (Doble - Reducido de w-48 a w-36 y h-12 a h-9) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-amber-400 font-mono">NPM P&P</span>
                            <div className="w-36 h-9 border-2 border-amber-500 bg-amber-950/50 flex flex-wrap gap-0.5 p-0.5 items-center justify-center rounded-sm">
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            </div>
                            <div className="h-1.5"></div>
                            <div className="w-36 h-9 border-2 border-amber-500 bg-amber-950/50 flex flex-wrap gap-0.5 p-0.5 items-center justify-center rounded-sm">
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                                <div className="w-5 h-2.5 bg-amber-500/20 border border-amber-400/50 rounded-[1px]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Conveyor 4 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* 4. Reflow Oven (Doble - Reducido de w-28 a w-24 y h-10 a h-8) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-red-400 font-mono">REFLOW OVEN</span>
                            <div className="w-24 h-7 border-2 border-red-500 bg-red-950/50 flex items-center justify-around px-0.5 rounded-sm">
                                <div className="w-3 h-4 bg-orange-600/40 rounded-sm"></div>
                                <div className="w-3 h-4 bg-red-600/50 rounded-sm"></div>
                                <div className="w-3 h-4 bg-cyan-600/40 rounded-sm"></div>
                            </div>
                            <div className="h-1.5"></div>
                            <div className="w-24 h-7 border-2 border-red-500 bg-red-950/50 flex items-center justify-around px-0.5 rounded-sm">
                                <div className="w-3 h-4 bg-orange-600/40 rounded-sm"></div>
                                <div className="w-3 h-4 bg-red-600/50 rounded-sm"></div>
                                <div className="w-3 h-4 bg-cyan-600/40 rounded-sm"></div>
                            </div>
                        </div>
                    </div>

                    {/* Conveyor 5 (Doble) */}
                    <div className="flex flex-col justify-center gap-6 h-full flex-shrink-0 pt-3">
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* 5. Unloader / Salida (Doble) */}
                    <div className="flex flex-col justify-center h-full flex-shrink-0">
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="text-[10px] text-gray-400 font-mono">UNLOADER</span>
                            <div className="w-4 h-4 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                            <div className="h-2"></div>
                            <div className="w-4 h-4 border-2 border-blue-500 bg-blue-950/50 rounded-sm"></div>
                        </div>
                    </div>

                </div>





            </div>
        </div>
    )
}