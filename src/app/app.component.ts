import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import type { ICompany } from "./interfaces/companies.interface";
// biome-ignore lint/style/useImportType: <explanation>
import { CompaniesService } from "./services/companies/companies.service";

import { Store } from "@ngrx/store";
import type { ICompaniesReducer } from "./store/companies/companies.reducer";
import { populateCompaniesArray } from "./store/companies/companies.actions";

import { map, pipe, take } from "rxjs";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	companies$;

	constructor(
		private companiesService: CompaniesService,
		private store: Store<{ companiesStore: ICompaniesReducer }>,
	) {
		this.companies$ = this.store
			.select("companiesStore")
			.pipe(map((e) => e.companies));
	}

	ngOnInit(): void {
		this.getCompanies();
	}

	getCompanies() {
		return this.companiesService.getCompanies().subscribe((response) => {
			this.store.dispatch(populateCompaniesArray(response));
		});
	}
}
