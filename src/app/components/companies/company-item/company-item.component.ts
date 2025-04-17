import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { ICompany } from '../../../interfaces/companies.interface';
import { Store } from '@ngrx/store';
import { ICompaniesState } from '../../../store/companies/companies.reducer';

import { MatIconModule } from '@angular/material/icon';
import { selectCurrentCompanyStore } from '../../../store/companies/companies.selectors';

@Component({
  selector: 'app-company-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.scss',
})
export class CompanyItemComponent {
  @Input()
  item!: ICompany;

  @Output() newCurrentyCompanyEvent = new EventEmitter();

  constructor(private store: Store<{ companiesStore: ICompaniesState }>) {}

  onViewClick(company: ICompany) {
    this.newCurrentyCompanyEvent.emit(company);
  }
}
