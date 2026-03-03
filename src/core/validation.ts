import {FormErrors} from "@/src/types/esg";

export const validate = (form : any): FormErrors => {
        const newErrors: FormErrors = {};

        if (!form.company_name.trim()) {
            newErrors.company_name = "Company name is required";
        }

        const year = Number(form.reporting_year);
        if (!form.reporting_year) {
            newErrors.reporting_year = "Reporting year is required";
        } else if (isNaN(year) || year <= 0) {
            newErrors.reporting_year = "Reporting year must be a positive number";
        }

        const scope1 = Number(form.scope1_tco2e);
        if (!form.scope1_tco2e) {
            newErrors.scope1_tco2e = "Scope 1 is required";
        } else if (isNaN(scope1) || scope1 < 0) {
            newErrors.scope1_tco2e = "Scope 1 must be a non-negative number";
        }

        const scope2 = Number(form.scope2_tco2e);
        if (!form.scope2_tco2e) {
            newErrors.scope2_tco2e = "Scope 2 is required";
        } else if (isNaN(scope2) || scope2 < 0) {
            newErrors.scope2_tco2e = "Scope 2 must be a non-negative number";
        }

        if (form.scope3_tco2e) {
            const scope3 = Number(form.scope3_tco2e);
            if (isNaN(scope3) || scope3 < 0) {
                newErrors.scope3_tco2e =
                    "Scope 3 must be a non-negative number";
            }
        }

        return newErrors;
    }