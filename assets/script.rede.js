//user creation
class Dados {
    contructor (name,email,birthdate,address,phone,cpf) {
    this.name = name;
    this.email = email;
    this.birthdate = birthdate;
    this.address = address;
    this.phone = phone;
    this.cpf = cpf;
    this.age = age;
    this.sign = sign;
    this.client = client;
}
}


//add user information 
class ListUsers {
    constructor(){
        this.users = [];
    }

    add (user) {
        this.users.push(user);
    }
}

//create instance ListUsers
const listUser = new ListUsers;

//create users
function createUsers (){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const cpf = document.getElementById("cpf").value;
    const age = document.getElementById("age").value;
    const sign = document.getElementById("sign").value;
    const client = document.getElementById("client").value;

    //create users from inputs
    const user = new User (name,email,birthdate,address,phone,cpf,age,sign,client);

    //call the method add users list users
    listUser.add(user);

    //call the function responsible for updating the items on the screen
    exibirUsersnaTela();
}


//function valida cpf
function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}
//function formate cpf
function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}

