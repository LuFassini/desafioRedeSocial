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

//function isAnyInputEmpty
function isAnyInputEmpty () {
    const user = [];
    user.length;
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

//function ValidaCPF
function validaCPF (){

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
        } else if (isCPFcadatrado(user.cpf)){
            sendErrorMsg ("CPF já cadastrado no sistema.");
        } else {
            return.push.(user);
            sendSuccessMsg ("Parabéns, você entrou na lista de espera!");
            cleanInput();
        }
    }
}


    
    


