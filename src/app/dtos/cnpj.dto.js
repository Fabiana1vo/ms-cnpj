class CnpjDto {
    constructor(data) {
        this.cnpj = data.cnpj
    }

    isValid() {
        const errors = []
        if (!isNotEmpty(this.cnpj)) errors.push('O campo *cnpj* é obrigatório');

        return errors.length === 0 ? true : { errors };
    }
}


function isNotEmpty(value) {
    return value !== undefined && value !== null && value !== '';
}


module.exports = CnpjDto;