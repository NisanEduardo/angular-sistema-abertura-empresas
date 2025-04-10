import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AsyncPipe } from "@angular/common";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

// biome-ignore lint/style/useImportType: <explanation>
import { CompaniesService } from "./services/companies/companies.service";
import type { ICompaniesState } from "./store/companies/companies.reducer";
import {
	setCompanies,
	setCurrentSelectedCompany,
} from "./store/companies/companies.actions";

import {
	selectCompaniesStore,
	selectCurrentCompanyStore,
} from "./store/companies/companies.selectors";

import type { ICompany } from "./interfaces/companies.interface";
import { CurrentCompanyComponent } from "./components/current-company/current-company.component";
import { CompanyFormComponent } from "./components/company-form/company-form.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		AsyncPipe,
		CurrentCompanyComponent,
		CompanyFormComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	companies$: Observable<ICompany[]>;
	currentSelectedCompany$: Observable<ICompany>;

	constructor(
		private companiesService: CompaniesService,
		private store: Store<{ companiesStore: ICompaniesState }>,
	) {
		this.companies$ = this.store.select(selectCompaniesStore);
		this.currentSelectedCompany$ = this.store.select(selectCurrentCompanyStore);
	}

	ngOnInit(): void {
		this.getCompanies();
	}

	getCompanies() {
		return this.companiesService.getCompanies().subscribe((response) => {
			this.store.dispatch(setCompanies(response));
		});
	}

	onViewClick(company: ICompany) {
		this.store.dispatch(setCurrentSelectedCompany(company));
	}
}
