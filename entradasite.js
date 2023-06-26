
  <script>
    function fazerLogin() {
      // Obter os valores de entrada do formulário de login
      var email = document.getElementById("email").value;
      var senha = document.getElementById("senha").value;
      
      // Verificar se o login é válido (exemplo simples)
      if (email === "usuario" && senha === "senha") {
        // Redirecionar para a página principal
        window.location.href = "pagina_principal.html";
      } else {
        alert("Credenciais de login inválidas. Tente novamente.");
      }
    }
  </script>
