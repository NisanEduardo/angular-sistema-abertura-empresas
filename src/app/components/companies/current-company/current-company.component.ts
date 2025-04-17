import { Component, Input } from '@angular/core';
import type { ICompany } from '../../../interfaces/companies.interface';
import { Store } from '@ngrx/store';
import type { ICompaniesState } from '../../../store/companies/companies.reducer';
import type { Observable } from 'rxjs';
import { selectCurrentCompanyStore } from '../../../store/companies/companies.selectors';
import { AsyncPipe } from '@angular/common';
import { ConvertDataToValidFormat } from '../../../utils/convertDataToValidFormat';

@Component({
  selector: 'app-current-company',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './current-company.component.html',
  styleUrl: './current-company.component.scss',
})
export class CurrentCompanyComponent {
  @Input() currentCompany!: Observable<ICompany>;
  formatData = new ConvertDataToValidFormat();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('carregour');
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
