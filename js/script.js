function simularLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email && senha) {
    alert(`Bem-vindo, ${email}!`);
    window.location.href = "confirmacao.html";
  }
}
