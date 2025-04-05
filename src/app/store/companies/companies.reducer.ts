import { createReducer, on } from "@ngrx/store";

import { populateCompaniesArray } from "./companies.actions";
import type { ICompany } from "../../interfaces/companies.interface";

export interface ICompaniesReducer {
	companies: ICompany[] | [];
}

const initialState: ICompaniesReducer = {
	companies: [],
};

export const companiesReducer = createReducer(
	initialState,
	on(populateCompaniesArray, (_, action) => ({
		companies: action.companies,
	})),
);
