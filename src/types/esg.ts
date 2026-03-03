export type ESGData = {
    company_name: string
    reporting_year: number
    scope1_tco2e: number
    scope2_tco2e: number
    scope3_tco2e?: number
}

export type StrategyType = {
  short: string
  neutral: string
  detailed: string
}

export type StrategyKey = keyof StrategyType

export type FormErrors = {
    company_name?: string
    reporting_year?: string
    scope1_tco2e?: string
    scope2_tco2e?: string
    scope3_tco2e?: string
}