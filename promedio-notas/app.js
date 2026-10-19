const form = document.querySelector("#grades-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const grades = ["grade1", "grade2", "grade3"].map((name) => Number(data.get(name)));
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

  result.hidden = false;
  result.innerHTML = `
    <h2>Resultado</h2>
    <p>El promedio de tus notas es <strong>${average.toFixed(2)} / 10</strong>.</p>
  `;
});
