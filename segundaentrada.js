document.getElementById("enviarBtn").addEventListener("click", fazerLogin); 
    //function fazerLogin () {
    //valores de entrada do formulario

  function fazerLogin() {
 
  let email = document.getElementById("email").value;

  let senha = document.getElementById ("senha").value;

    // como validar o email e senha 

 if (email === "email" && senha === "senha") {
        // redirecionar para a pagina principal
       window.location.href = "./homedositeparallel.html";

  } else {
          alert("sua entrada não está autorizada");
    }
};

//document.getElementById("enviarBtn").addEventListener("submit", function(event) {
            //event.preventDefault(); // Evita o envio do formulário

            //var email = document.getElementById("email").value;
            //var senha = document.getElementById("senha").value;

            // Aqui você pode realizar validações ou enviar os dados do formulário para um servidor

            // Exemplo de validação simples
           // if (email === "usuario@example.com" && senha === "123456") {
           //     alert("Bem vindo aventureiro");
           // } else {
             //   alert("você não está autorizado.");
          //  }
       // }); 
