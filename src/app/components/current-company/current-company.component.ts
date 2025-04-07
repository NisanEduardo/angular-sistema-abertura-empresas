import { Component, Input } from "@angular/core";
import type { ICompany } from "../../interfaces/companies.interface";
import { Store } from "@ngrx/store";
import type { ICompaniesState } from "../../store/companies/companies.reducer";
import type { Observable } from "rxjs";
import { selectCurrentCompanyStore } from "../../store/companies/companies.selectors";
import { AsyncPipe } from "@angular/common";
import { ConvertDataToValidFormat } from "../../utils/convertDataToValidFormat";

@Component({
	selector: "app-current-company",
	standalone: true,
	imports: [AsyncPipe],
	templateUrl: "./current-company.component.html",
	styleUrl: "./current-company.component.scss",
})
export class CurrentCompanyComponent {
	currentCompany$: Observable<ICompany>;
	formatData = new ConvertDataToValidFormat();

	constructor(private store: Store<{ companiesStore: ICompaniesState }>) {
		this.currentCompany$ = this.store.select(selectCurrentCompanyStore);
	}

	convertToCpfFormat(cpf: string | undefined) {
		if (!cpf) throw new Error();
		return this.formatData.formatCPF(cpf);
	}

	convertToCEPFormat(cep: number | undefined) {
		if (!cep) throw new Error();
		return this.formatData.formatCEP(cep);
	}
}
