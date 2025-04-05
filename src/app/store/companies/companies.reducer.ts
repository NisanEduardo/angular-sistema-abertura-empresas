import { createReducer, on } from "@ngrx/store";
import { setCompanies, setCurrentSelectedCompany } from "./companies.actions";
import type { ICompany } from "../../interfaces/companies.interface";

export interface ICompaniesState {
	companies: ICompany[];
	currentSelectedCompany: ICompany | null;
}

export const initialState: ICompaniesState = {
	companies: [],
	currentSelectedCompany: null,
};

export const companiesReducer = createReducer(
	initialState,
	on(setCompanies, (state, action) => ({
		...state,
		companies: action.companies,
	})),
	on(setCurrentSelectedCompany, (state, action) => ({
		...state,
		currentSelectedCompany: action.company,
	})),
);
