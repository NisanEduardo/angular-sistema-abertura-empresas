import { Component, Input } from '@angular/core';
import { ICompany } from '../../../interfaces/companies.interface';
import { Store } from '@ngrx/store';
import { ICompaniesState } from '../../../store/companies/companies.reducer';
import { setCurrentSelectedCompany } from '../../../store/companies/companies.actions';

import { MatIconModule } from '@angular/material/icon';

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

  constructor(private store: Store<{ companiesStore: ICompaniesState }>) {}

  onViewClick(company: ICompany) {
    this.store.dispatch(setCurrentSelectedCompany(company));
  }
}
