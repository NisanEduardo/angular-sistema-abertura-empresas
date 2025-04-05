import { createReducer, on } from "@ngrx/store";
import { setCompanies } from "./companies.actions";
import type { ICompany } from "../../interfaces/companies.interface";

export interface ICompaniesState {
	companies: ICompany[];
}

export const initialState: ICompaniesState = {
	companies: [],
};

export const companiesReducer = createReducer(
	initialState,
	on(setCompanies, (state, action) => ({
		...state,
		companies: action.companies,
	})),
);
