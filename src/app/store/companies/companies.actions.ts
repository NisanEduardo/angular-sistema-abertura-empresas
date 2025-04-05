import { createAction } from "@ngrx/store";
import type { ICompany } from "../../interfaces/companies.interface";

export const populateCompaniesArray = createAction(
	"[Companies] Adiciona as empresas retornadas do server ao array",
	(companies: ICompany[]) => ({ companies }),
);
