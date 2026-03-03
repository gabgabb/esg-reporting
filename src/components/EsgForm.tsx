"use client"

import {ChangeEvent, useState} from "react"
import {useESGStore} from "@/src/store/store";
import {ESGData, FormErrors} from "@/src/types/esg";
import {validate} from "@/src/core/validation";

export default function EsgForm() {
    const setData = useESGStore((s) => s.setData);
    const data = useESGStore((s) => s.data);

    const [errors, setErrors] = useState<FormErrors>({});

    const [form, setForm] = useState(() => ({
        company_name: data?.company_name ?? "",
        reporting_year: data?.reporting_year?.toString() ?? "",
        scope1_tco2e: data?.scope1_tco2e?.toString() ?? "",
        scope2_tco2e: data?.scope2_tco2e?.toString() ?? "",
        scope3_tco2e: data?.scope3_tco2e?.toString() ?? ""
    }));


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {
        const validationErrors = validate(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return
        }

        const esgData: ESGData = {
            company_name: form.company_name.trim(),
            reporting_year: Number(form.reporting_year),
            scope1_tco2e: Number(form.scope1_tco2e),
            scope2_tco2e: Number(form.scope2_tco2e),
            scope3_tco2e: form.scope3_tco2e
                ? Number(form.scope3_tco2e)
                : undefined,
        };

        setData(esgData);
    }

    return (
        <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-1/3 flex items-center justify-center">
            <div className="flex flex-col gap-4 w-3/5">
                <input
                    className="border-2 bg-neutral-200 border-slate-300 text-neutral-900 p-2 w-full focus:outline-none rounded-lg transition-colors focus:border-blue-400"
                    name="company_name"
                    placeholder="Company name"
                    onChange={handleChange}
                    value={form.company_name}
                />
                {errors.company_name && (
                    <p className="text-red-400 text-sm">
                        {errors.company_name}
                    </p>
                )}
                <input
                    className="border-2 bg-neutral-200 border-slate-300 text-neutral-900 p-2 w-full focus:outline-none rounded-lg transition-colors focus:border-blue-400"
                    name="reporting_year"
                    placeholder="Reporting year"
                    type="number"
                    onChange={handleChange}
                    value={form.reporting_year}
                />
                {errors.reporting_year && (
                    <p className="text-red-400 text-sm">
                        {errors.reporting_year}
                    </p>
                )}
                <input
                    className="border-2 bg-neutral-200 border-slate-300 text-neutral-900 p-2 w-full focus:outline-none rounded-lg transition-colors focus:border-blue-400"
                    name="scope1_tco2e"
                    placeholder="Scope 1 tCO2e"
                    type="number"
                    onChange={handleChange}
                    value={form.scope1_tco2e}
                />
                {errors.scope1_tco2e && (
                    <p className="text-red-400 text-sm">
                        {errors.scope1_tco2e}
                    </p>
                )}
                <input
                    className="border-2 bg-neutral-200 border-slate-300 text-neutral-900 p-2 w-full focus:outline-none rounded-lg transition-colors focus:border-blue-400"
                    name="scope2_tco2e"
                    placeholder="Scope 2 tCO2e"
                    type="number"
                    onChange={handleChange}
                    value={form.scope2_tco2e}
                />
                {errors.scope2_tco2e && (
                    <p className="text-red-400 text-sm">
                        {errors.scope2_tco2e}
                    </p>
                )}
                <input
                    className="border-2 bg-neutral-200 border-slate-300 text-neutral-900 p-2 w-full focus:outline-none rounded-lg transition-colors focus:border-blue-400"
                    name="scope3_tco2e"
                    placeholder="Scope 3 tCO2e (optional)"
                    type="number"
                    onChange={handleChange}
                    value={form.scope3_tco2e}
                />
                {errors.scope3_tco2e && (
                    <p className="text-red-400 text-sm">
                        {errors.scope3_tco2e}
                    </p>
                )}

                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer text-white px-4 py-2 rounded"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </div>
    )
}