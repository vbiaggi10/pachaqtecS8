const btnSend = document.querySelector("#send");

const doSomething = (n1, n2, operator) => {
  let resultado = 0;
  switch (operator) {
    case "suma":
      resultado = n1 + n2;
      break;
    case "resta":
      resultado = n1 - n2;
      break;
    case "multiplicacion":
      resultado = n1 * n2;
      break;
    case "division":
      resultado = n1 / n2;
      break;
    default:
      break;
  }
  return resultado;
};

btnSend.addEventListener("click", () => {
  const n1 = Number(document.querySelector("#n1").value);
  const n2 = Number(document.querySelector("#n2").value);
  const operacion = document.querySelector("#operator").value;
  const resultado = document.querySelector("#result");
  resultado.innerHTML = "Resultado " + doSomething(n1, n2, operacion);
});
