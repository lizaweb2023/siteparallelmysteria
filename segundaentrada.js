document.getElementById("my.form").addEventListener("submit", function(event) {
   event.preventDefault();
    //valores de entrada do formulario

 
  let email = document.getElementById("email").value;

  let senha = document.getElementById ("senha").value;

    // como validar o email e senha 

 if (email === "email" && senha === "senha") {
        // redirecionar para a pagina principal
       window.location.href = "./homedositeparallel.html";

  } else {
          alert("sua entrada não está autorizada");
    }

    let formdata=new FormData();
formdata.append("email",email, "senha" ,senha)
fetch("https://formspree.io/f/xqkvzvpk",{
  method:"Post",
  headers:{
    "Accept": "aplication/json"
  },
body: formdata
 
})
 .then(function(response){
  //trata-se da resposta do site ao cliente
  if(response.ok){
  alert ("Formulário enviado com sucesso");
}
else{
  alert("Ocorreu um erro ao enviar o formulário. por favor, tente mais tarde")
}
 })
 .catch (function(error){
  alert("Ocorreu um erro ao enviar o formulário. por favor, tente mais tarde")

 });


});

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
