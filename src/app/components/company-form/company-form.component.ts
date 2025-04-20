import { Component } from "@angular/core";
import {
	Form,
	FormControl,
	FormControlOptions,
	FormControlState,
	FormsModule,
} from "@angular/forms";
import { JsonPipe } from "@angular/common";

import { Companies } from "../../models/companies";

@Component({
	selector: "app-company-form",
	standalone: true,
	imports: [FormsModule, JsonPipe],
	templateUrl: "./company-form.component.html",
	styleUrl: "./company-form.component.scss",
})
export class CompanyFormComponent {
	entidade = ["Cartório", "Junta Comercial", "OAB", "RFB"];

	model: Companies;

	localStorageCurrentCompany =
		localStorage.getItem("currentCompanyLocal") || "";

	constructor() {
		this.model = new Companies(JSON.parse(this.localStorageCurrentCompany));
	}

	submitted = false;

	onSubmit() {
		this.submitted = true;
		this.showFormControls;
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	showFormControls(form: any) {
		return form?.controls.ds_bairro?.value;
	}
}
