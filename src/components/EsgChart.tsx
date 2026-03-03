"use client"

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from "chart.js"
import {Bar} from "react-chartjs-2"
import {useESGStore} from "@/src/store/store";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
)

export default function ESGChart() {
    const data = useESGStore((s) => s.data)

    if (!data) return null

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Report for ${data.reporting_year} of ${data.company_name}`,
            },
        },
    };

    const chartData = {
        labels: [
            "Scope 1",
            "Scope 2",
            ...(data.scope3_tco2e ? ["Scope 3"] : [])
        ],
        datasets: [
            {
                label: "tCO2e",
                data: [
                    data.scope1_tco2e,
                    data.scope2_tco2e,
                    ...(data.scope3_tco2e ? [data.scope3_tco2e] : [])
                ],
                backgroundColor: [
                    "#3B82F6",
                    "#10B981",
                    ...(data.scope3_tco2e ? ["#F59E0B"] : [])
                ]
            }
        ]
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 h-full mt-10 flex items-center justify-center">
            <Bar className="w-full" data={chartData} options={options}/>
        </div>
    )
}