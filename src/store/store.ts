import {create} from "zustand"
import {ESGData, StrategyKey, StrategyType} from "@/src/types/esg";
import {persist} from "zustand/middleware";

type ESGState = {
    hydrated: boolean,
    setHydrated: (v: boolean) => void,
    data: ESGData | null,
    selectedStrategy: StrategyKey | null,
    strategies: StrategyType | null,
    setData: (data: ESGData) => void,
    setStrategies: (s: StrategyType) => void,
    setSelectedStrategy: (s: StrategyKey) => void,
    clear: () => void,
}

export const useESGStore = create<ESGState>()(
    persist(
        (set) => ({
            data: null,
            selectedStrategy: null,
            strategies: null,
            hydrated: false,
            setHydrated: (v: boolean) => set({hydrated: v}),
            setData: (data) => set({data}),
            setStrategies: (strategies) => set({strategies}),
            setSelectedStrategy: (selectedStrategy) =>
                set({selectedStrategy}),
            clear: () => set({data: null, selectedStrategy: null, strategies: null}),
        }),
        {
            name: "esg-storage",
            onRehydrateStorage: () => (state) => {
                state?.setHydrated(true)
            },
        }
    )
)