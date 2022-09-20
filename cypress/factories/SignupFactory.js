var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11982627602',
            address: {
                postalcode: '02967020',
                street: 'Rua Galdino Rosa',
                number: '176',
                details: 'Casa 1',
                district: 'Vila Regina',
                city_state: 'São Paulo/SP'
          },
          delivery_method: 'Moto',
          cnh: 'cnh-digital.jpg'
        }

        return data
    }
}