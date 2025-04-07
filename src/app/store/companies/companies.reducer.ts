import { createReducer, on } from "@ngrx/store";
import { setCompanies, setCurrentSelectedCompany } from "./companies.actions";
import type { ICompany } from "../../interfaces/companies.interface";

export interface ICompaniesState {
	companies: ICompany[];
	currentSelectedCompany: ICompany;
}

export const initialState: ICompaniesState = {
	companies: [],
	currentSelectedCompany: {
		solicitante: {
			ds_responsavel: "Catarina Ester da Cruz",
			nu_cpf: "83812080176",
			date_nascimento: "1984-04-20",
		},
		empresa: {
			ds_nome_fantasia: "Diogo e Marcelo Filmagens Ltda",
			co_entidade_registro: 104306,
			co_natureza_juridica: 10021,
			endereco: {
				co_cep: 14022094,
				ds_logradouro: "Rua Alcino Jacinto Ramos",
				co_numero: "233",
				ds_complemento: null,
				ds_bairro: "Quinta da Primavera",
				ds_municipio: "Ribeirão Preto",
				co_uf: "29",
			},
		},
		id: 1,
	},
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
