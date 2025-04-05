import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import type { ICompany } from "../../interfaces/companies.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class CompaniesService {
	private apiUrl = "http://localhost:3000";

	constructor(private api: HttpClient) {}

	getCompanies(): Observable<ICompany[]> {
		return this.api.get<ICompany[]>(`${this.apiUrl}/empresas`);
	}
}
