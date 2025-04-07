export class ConvertDataToValidFormat {
	formatCPF(cpf: string) {
		const fomatedCpf = cpf?.toString().replace(/\D/g, "");
		return fomatedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
	}

	formatCEP(cep: number) {
		const fomatedCEP = cep?.toString().replace(/\D/g, "");
		return fomatedCEP.replace(/(\d{5})(\d{3})/, "$1-$2");
	}
}
