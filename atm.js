let cuentas = [
    { usuario: "gladysflores", password: '12345', saldo: 100},
    { usuario: "anavillanueva", password: '12345', saldo: 100},
    { usuario: "ashlinflores", password: '12345', saldo: 100},
    { usuario: "lauraflores", password: '20141', saldo: 100}
]


function login() {
    const nombre = document.getElementById('username').value;
    const contraseña = document.getElementById('password').value;

    for (let index = 0; index < cuentas.length; index++) {
        if(nombre === cuentas[index].usuario && contraseña === cuentas[index].password) {
        window.location.href = "inicio.html";
        } else{
        document.getElementById("mensaje").innerHTML = ('Usuario y contraseña no encontrados.')
        mensaje.style.color = "red"
        }
    }
}



















