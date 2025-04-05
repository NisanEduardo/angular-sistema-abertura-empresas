export interface ICompany {
	solicitante: IApplicant;
	empresa: TEmpresa;
	id: number;
}

interface IApplicant {
	ds_responsavel: string;
	nu_cpf: string;
	date_nascimento: string;
}

interface TEmpresa {
	ds_nome_fantasia: string;
	co_entidade_registro: number;
	co_natureza_juridica: number;
	endereco: IEndereco;
}

interface IEndereco {
	co_cep: number;
	ds_logradouro: string;
	co_numero: string;
	ds_complemento?: string | null;
	ds_bairro: string;
	ds_municipio: string;
	co_uf: string;
}
