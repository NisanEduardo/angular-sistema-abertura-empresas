import { Component, Input, Output, EventEmitter } from "@angular/core";
import type { ICompany } from "../../../interfaces/companies.interface";

import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-company-item",
	standalone: true,
	imports: [MatIconModule],
	templateUrl: "./company-item.component.html",
	styleUrl: "./company-item.component.scss",
})
export class CompanyItemComponent {
	@Input()
	item!: ICompany;

	@Output() newCurrentyCompanyEvent = new EventEmitter();

	onViewClick(company: ICompany) {
		this.newCurrentyCompanyEvent.emit(company);
	}
}
