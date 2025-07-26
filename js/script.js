function simularLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  async function gerarHash(texto) {
    const msgUint8 = new TextEncoder().encode(texto);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    alert(`Usuário: ${email}\nSenha em SHA-256: ${hashHex}`);
  }

  gerarHash(senha);
}
