const form = document.querySelector("#bill-form");
const result = document.querySelector("#result");
const amount = (value) => value.toFixed(2);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const total = Number(data.get("total"));
  const tipPercent = Number(data.get("tipPercent"));
  const people = Number(data.get("people"));

  if (!Number.isInteger(people) || people < 1) {
    result.hidden = false;
    result.innerHTML = '<p class="error">El número de personas debe ser un entero mayor que cero.</p>';
    return;
  }

  const tip = total * (tipPercent / 100);
  const totalWithTip = total + tip;
  const perPerson = totalWithTip / people;

  result.hidden = false;
  result.innerHTML = `
    <h2>Resultado</h2>
    <p>Propina: <strong>${amount(tip)}</strong></p>
    <p>Total con propina: <strong>${amount(totalWithTip)}</strong></p>
    <p>Cada persona paga: <strong>${amount(perPerson)}</strong></p>
  `;
});
