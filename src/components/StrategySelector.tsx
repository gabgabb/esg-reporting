"use client"

import {useESGStore} from "@/src/store/store"
import {StrategyKey} from "@/src/types/esg";

export default function StrategySelector() {
    const strategies = useESGStore((s) => s.strategies)
    const selected = useESGStore((s) => s.selectedStrategy)
    const setSelected = useESGStore((s) => s.setSelectedStrategy)

    if (!strategies) return null

    const strategyKeys: StrategyKey[] = ["short", "neutral", "detailed"]

    return (
        <div className="mt-6 space-y-4">
            {strategyKeys.map((key) => (
                <div
                    key={key}
                    onClick={() => setSelected(key)}
                    className={`p-4 rounded cursor-pointer border transition-all ${
                        selected === key
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 bg-white"
                    }`}
                >
                    <h3 className="font-semibold capitalize mb-2 text-neutral-900">
                        {key} Strategy
                    </h3>
                    <p className="whitespace-pre-line text-sm text-neutral-900">
                        {strategies[key]}
                    </p>
                </div>
            ))}
        </div>
    )
}