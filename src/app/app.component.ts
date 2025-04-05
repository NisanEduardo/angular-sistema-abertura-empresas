import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
// biome-ignore lint/style/useImportType: <explanation>
import { CompaniesService } from "./services/companies/companies.service";

import { map, Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AsyncPipe } from "@angular/common";
import type { ICompaniesState } from "./store/companies/companies.reducer";
import { setCompanies } from "./store/companies/companies.actions";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, AsyncPipe],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	companies$;

	constructor(
		private companiesService: CompaniesService,
		private store: Store<{ companiesStore: ICompaniesState }>,
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
			this.store.dispatch(setCompanies(response));
		});
	}
}
