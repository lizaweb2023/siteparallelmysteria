document.getElementById("form").addEventListener("submit", function (event) {
event.preventDefault();

let nome = document.getElementById("nome").value;
let usuario = document.getElementById("nome-de-usuario").value;
let senha = document.getElementById("senha").value;
let cidade = document.getElementById("cidade").value;
let estado = document.getElementById("estado").value;

let formdata=new FormData();
formdata.append("nome",nome,"Sobrenome",Sobrenome,"nome-de-usuario",Nome-de-usuario,"senha",senha,"cidade",cidade,"estado",estado)
fetch("https://formspree.io/f/xqkvzrnd",{
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


