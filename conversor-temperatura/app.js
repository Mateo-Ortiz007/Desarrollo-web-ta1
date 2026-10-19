const form = document.querySelector("#temperature-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const celsius = Number(new FormData(form).get("celsius"));
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  result.hidden = false;
  result.innerHTML = `
    <h2>Resultado</h2>
    <p>Fahrenheit: <strong>${fahrenheit.toFixed(2)} °F</strong></p>
    <p>Kelvin: <strong>${kelvin.toFixed(2)} K</strong></p>
  `;
});
