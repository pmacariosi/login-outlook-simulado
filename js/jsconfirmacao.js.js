function verificarCodigo() {
  const codigo = document.getElementById("codigo").value;

  if (codigo === "123456") {
    alert("Código verificado com sucesso!");
    window.location.href = "dashboard.html";
  } else {
    alert("Código inválido. Tente novamente.");
  }
}

function mostrarMfa() {
  document.getElementById("mfa-box").style.display = "block";
}

function verificarMfa() {
  const codigoMfa = document.getElementById("codigoMfa").value;

  if (codigoMfa === "987654") {
    alert("Código MFA validado com sucesso!");
    window.location.href = "dashboard.html";
  } else {
    alert("Código do autenticador inválido.");
  }
}
