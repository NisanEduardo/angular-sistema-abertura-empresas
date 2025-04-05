import { createAction } from "@ngrx/store";
import type { ICompany } from "../../interfaces/companies.interface";

export const setCompanies = createAction(
	"[Companies] Set loaded companies",
	(companies: ICompany[]) => ({ companies }),
);

export const setCurrentSelectedCompany = createAction(
	"[Company] Set current selected company",
	(company: ICompany) => ({ company }),
);
