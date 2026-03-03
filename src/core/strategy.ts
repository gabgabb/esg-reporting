import {ESGData, StrategyType} from "@/src/types/esg"

export function generateStrategies(data: ESGData): StrategyType {
  const total =
    data.scope1_tco2e +
    data.scope2_tco2e +
    (data.scope3_tco2e ?? 0)

  const baseSentence = `In ${data.reporting_year}, ${data.company_name} reported ${data.scope1_tco2e} tCO2e (Scope 1) and ${data.scope2_tco2e} tCO2e (Scope 2), with a total of ${total} tCO2e.`

  return {
    short: `${baseSentence} The company aims to reduce emissions through operational efficiency and renewable energy sourcing.`,

    neutral: `${baseSentence} The organization acknowledges its environmental footprint and plans to implement structured carbon reduction measures, including energy efficiency improvements, renewable energy procurement, and supplier engagement initiatives.`,

    detailed: `${baseSentence}

Strategic Action Plan:

1. Reduce Scope 1 emissions by optimizing production processes.
2. Transition at least 50% of electricity consumption to renewable sources.
3. Implement energy monitoring systems across all facilities.
4. Launch supplier decarbonization initiatives to address Scope 3 emissions.
5. Introduce quarterly ESG performance tracking and public transparency reporting.
`
  }
}