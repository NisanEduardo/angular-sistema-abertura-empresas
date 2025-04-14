import { Component } from '@angular/core';
import {
  Form,
  FormControl,
  FormControlOptions,
  FormControlState,
  FormsModule,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { Companies } from '../../models/companies';

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.scss',
})
export class CompanyFormComponent {
  entidade = ['Cartório', 'Junta Comercial', 'OAB', 'RFB'];

  model = new Companies({
    id: 1,
    solicitante: {
      ds_responsavel: 'Catarina Ester da Cruz',
      nu_cpf: '83812080176',
      date_nascimento: '1984-04-20',
    },
    empresa: {
      ds_nome_fantasia: 'Diogo e Marcelo Filmagens Ltda',
      co_entidade_registro: 104306,
      co_natureza_juridica: 10021,
      endereco: {
        co_cep: 14022094,
        ds_logradouro: 'Rua Alcino Jacinto Ramos',
        co_numero: '233',
        ds_complemento: undefined,
        ds_bairro: 'Quinta da Primavera',
        ds_municipio: 'Ribeirão Preto',
        co_uf: '29',
      },
    },
    entidadeRegistro: 'Cartório',
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.showFormControls;
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  showFormControls(form: any) {
    console.log('sdds', form.controls);
    return form?.controls.ds_bairro?.value;
  }
}
