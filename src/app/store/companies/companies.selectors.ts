import { createSelector, createFeatureSelector } from "@ngrx/store";

import type { ICompaniesState } from "./companies.reducer";

export const selectICompaniesState =
	createFeatureSelector<ICompaniesState>("companiesStore");

export const selectCompaniesStore = createSelector(
	selectICompaniesState,
	(state) => state.companies,
);

export const selectCurrentCompanyStore = createSelector(
	selectICompaniesState,
	(state) => state.currentSelectedCompany,
);
