export class Companies {
	constructor(
		public companyModel: {
			id: number;
			solicitante: {
				ds_responsavel: string;
				nu_cpf: string;
				date_nascimento: string;
			};
			empresa: {
				ds_nome_fantasia: string;
				co_entidade_registro: number;
				co_natureza_juridica: number;
				endereco: {
					co_cep: number;
					ds_logradouro: string;
					co_numero: string;
					ds_complemento?: string;
					ds_bairro: string;
					ds_municipio: string;
					co_uf: string;
				};
			};
			entidadeRegistro: string;
		},
	) {}
}
