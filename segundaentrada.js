document.getElementById("enviarBtn").addEventListener("click", fazerLogin);

     function fazerLogin (){
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
};
