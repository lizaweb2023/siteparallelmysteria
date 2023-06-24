<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
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
</head>
<body>
  <h1>Login</h1>
  
  <form>
    <label for="email">E-mail:</label>
    <input type="text" id="email" required><br><br>
    
    <label for="senha">Senha:</label>
    <input type="password" id="senha" required><br><br>
    
    <input type="button" value="Entrar" onclick="fazerLogin()">
  </form>
</body>
</html>
