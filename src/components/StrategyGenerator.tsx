"use client"

import { useESGStore } from "@/src/store/store"
import {generateStrategies} from "@/src/core/strategy";

export default function StrategyGenerator() {
  const data = useESGStore((s) => s.data)
  const setStrategies = useESGStore((s) => s.setStrategies)

  if (!data) return null

  const handleGenerate = () => {
    const variants = generateStrategies(data)
    setStrategies(variants)
  }

  return (
    <button
      onClick={handleGenerate}
      className="bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-2 rounded mt-6 cursor-pointer"
    >
      Generate Strategy
    </button>
  )
}