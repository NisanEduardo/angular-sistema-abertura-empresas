import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { CompaniesService } from "../../../services/companies/companies.service";

import { ICompaniesState } from "../../../store/companies/companies.reducer";
import { ICompany } from "../../../interfaces/companies.interface";
import {
	selectCompaniesStore,
	selectCurrentCompanyStore,
} from "../../../store/companies/companies.selectors";
import {
	setCompanies,
	setCurrentSelectedCompany,
} from "../../../store/companies/companies.actions";
import { CompanyItemComponent } from "../company-item/company-item.component";
import { AsyncPipe } from "@angular/common";
import { CurrentCompanyComponent } from "../current-company/current-company.component";

@Component({
	selector: "app-companies-list",
	standalone: true,
	imports: [AsyncPipe, CompanyItemComponent, CurrentCompanyComponent],
	templateUrl: "./companies-list.component.html",
	styleUrl: "./companies-list.component.scss",
})
export class CompaniesListComponent {
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
		return this.companiesService.listCompanies().subscribe((response) => {
			this.store.dispatch(setCompanies(response));
		});
	}

	changeCurrentCompany(company: ICompany) {
		this.store.dispatch(setCurrentSelectedCompany(company));
	}
}
