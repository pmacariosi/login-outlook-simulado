function verificarCodigo() {
  const codigo = document.getElementById("codigo").value;

  if (codigo === "123456") {
    alert("Código verificado com sucesso!");
    window.location.href = "dashboard.html";
  } else {
    alert("Código inválido. Tente novamente.");
  }
}