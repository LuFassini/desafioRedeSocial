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
function createUser() {
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
    displayRedeSocial();
}

function clearInputs () {
    clearFormFields();
}

//function show users 
function exibirUsersnaTela (){
    let html = "";

    listUser.users.forEach (user => {
        html += `
        <div> 
        <p> name: ${user.name}           </p>
        <p> email: ${user.email}         </p>
        <p> birthdate: ${user.birthdate} </p>
        <p> adress: ${user.address}      </p>
        <p> phone: ${user.phone}         </p>
        <p> cpf: ${user.cpf}             </p>
        <p> age: ${user.age}             </p>
        <p> sing: ${user.sign}           </p>
        <p> client: ${user.client}       </p>
        </div>
    `;
    });
    document.getElementById(usersNameHTML).innerHTML = html;
}

    function calculateAge(dateString) {
        const today = new Date();
        const birthdate = new;

        Date (dateString);
        let age = today.getFullYear();

        const m = today.getMonth() - birthdate.getDate();

        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        } 
        return age;
    }
    console.log(getAge("1991/05/02"));


