class GetCnpjDto {
    constructor(data) {
        this.status = data.status;
        this.ultima_atualizacao = data.ultima_atualizacao;
        this.cnpj = data.cnpj;
        this.tipo = data.tipo;
        this.porte = data.porte;
        this.nome = data.nome;
        this.fantasia = data.fantasia;
        this.abertura = data.abertura;
        this.atividade_principal = data.atividade_principal;
        this.atividades_secundarias = data.atividades_secundarias;
        this.natureza_juridica = data.natureza_juridica;
        this.logradouro = data.logradouro;
        this.numero = data.numero;
        this.complemento = data.complemento;
        this.cep = data.cep;
        this.bairro = data.bairro;
        this.municipio = data.municipio;
        this.uf = data.uf;
        this.email = data.email;
        this.telefone = data.telefone;
        this.efr = data.efr;
        this.situacao = data.situacao;
        this.data_situacao = data.data_situacao;
        this.motivo_situacao = data.motivo_situacao;
        this.situacao_especial = data.situacao_especial;
        this.data_situacao_especial = data.data_situacao_especial;
        this.capital_social = data.capital_social;
        this.qsa = data.qsa;
        this.billing = data.billing;
    }

    async getCnpjData() {
        return {
            status: this.status,
            ultima_atualizacao: this.ultima_atualizacao,
            cnpj: this.cnpj,
            tipo: this.tipo,
            porte: this.porte,
            corporateName: this.nome,
            tradeName: this.fantasia,
            openingDate: this.abertura,
            atividade_principal: this.atividade_principal,
            atividades_secundarias: this.atividades_secundarias,
            natureza_juridica: this.natureza_juridica,
            street: this.logradouro,
            addressNumber: this.numero,
            complement: this.complemento,
            zipCode: this.cep,
            neighborhood: this.bairro,
            city: this.municipio,
            state: this.uf,
            email: this.email,
            telefone: this.telefone,
            efr: this.efr,
            situacao: this.situacao,
            data_situacao: this.data_situacao,
            motivo_situacao: this.motivo_situacao,
            situacao_especial: this.situacao_especial,
            data_situacao_especial: this.data_situacao_especial,
            capital_social: this.capital_social,
            qsa: this.qsa,
            billing: this.billing
        };
    }
}

function isNotEmpty(value) {
    return value !== undefined && value !== null && value !== '';
}

module.exports = GetCnpjDto;