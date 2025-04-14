import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { ICompany } from '../../interfaces/companies.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private apiUrl = 'http://localhost:3000';

  constructor(private api: HttpClient) {}

  listCompanies(): Observable<ICompany[]> {
    return this.api.get<ICompany[]>(`${this.apiUrl}/empresas`);
  }

  createCompany(company: ICompany) {
    return this.api.post(`${this.apiUrl}/empresas`, {
      company,
    });
  }

  updateCompany(company: ICompany) {
    return this.api.put(`${this.apiUrl}/empresas/${company.id}`, {
      company,
    });
  }

  deleteCompany(companyId: string) {
    return this.api.delete(`${this.apiUrl}/empresas/${companyId}`);
  }
}
