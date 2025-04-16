import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { CompanyItemComponent } from './components/companies/company-item/company-item.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    CompanyItemComponent,
    CompaniesListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
