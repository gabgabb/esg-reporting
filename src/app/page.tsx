"use client"

import EsgChart from "@/src/components/EsgChart";
import EsgForm from "@/src/components/EsgForm";
import {useESGStore} from "@/src/store/store";
import StrategyGenerator from "@/src/components/StrategyGenerator"
import StrategySelector from "@/src/components/StrategySelector"

export default function Home() {
    const hydrated = useESGStore((s) => s.hydrated)
    const clear = useESGStore((s) => s.clear)

    if (!hydrated) return null

    return (
        <main className="h-screen w-screen p-10 bg-stone-200 flex flex-col items-center overflow-y-auto">
            <h1 className="text-2xl font-bold mb-6 text-neutral-900 text-center">Mini ESG Report</h1>
            <button
                className="bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded mb-6 hover:cursor-pointer"
                onClick={clear}>Clear
            </button>
            <EsgForm/>
            <EsgChart/>
            <StrategyGenerator/>
            <StrategySelector/>
        </main>
    )
}