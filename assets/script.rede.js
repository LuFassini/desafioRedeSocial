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

//create function createUser
function createUser() {
   const nameInput =     document.getElementById("nameInput").value;
   const emailInput =    document.getElementById("emailInput").value;
   const birthdateInput  document.getElementById("birthdateInput").value;
   const addressInput =  document.getElementById("addressInput").value;
   const phoneInput =    document.getElementById("phoneInput").value;
   const cpfInputf =     document.getElementById("cpfInput").value;
    

    const user = new user (nameInput,emailInput,birthdateInput,addressInput,phoneInput,cpfInputf);

    const list = new list;
    
    ListUsers.add(user);
    
    exibirusers();
}

// function isAnyInputEmpty
function isAnyInputEmpty () {
    const user = [];
    user.length;
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

//reorganize date 
function reorganizeDate (){
  
}
//function registered cpf
function isCPFcadastrado() {
     Boolean validacpf == true
}

//function mensage sucess
function sendSuccessMsg(msg) {
    console.log("Passou pela funcao sendSuccessMsg()");

    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
}

//function mensage error
function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

//function clear inputs
 function clearInputs() {
    cleanInput();
 }

//add user list
class ListUsers {
    constructor(){
        this.user = [];
    }
        add (user) {
        if (isAnyInputEmpty() == true) {
             sendErrorMsg ("Todos os campos obrigatórios devem ser preenchidos.");
        } else if (!validaCPF (user.cpf)){
            sendErrorMsg("CPF inválido.");
        } else if (isCPFcadastrado(user.cpf)){
            sendErrorMsg ("CPF já cadastrado no sistema.");
        } else {
            (user).push;
            sendSuccessMsg ("Parabéns, você entrou na lista de espera!");
            cleanInput();
        }
    }
}


    
    


