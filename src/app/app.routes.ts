import { Routes } from "@angular/router";
import { CompaniesListComponent } from "./components/companies/companies-list/companies-list.component";
import { CompanyFormComponent } from "./components/company-form/company-form.component";

export const routes: Routes = [
	{ path: "", component: CompaniesListComponent },
	{ path: "registrar-empresa", component: CompanyFormComponent },
];
