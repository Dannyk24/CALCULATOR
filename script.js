let calculation = "";
const result = document.querySelector(".js-calculation-result");
const equation = document.querySelector(".js-calculation-equation");
if (
  !(localStorage.getItem("calculation") && localStorage.getItem("equation"))
) {
  equation.innerHTML = "";
  result.innerHTML = "0";
} else {
  equation.innerHTML = localStorage.getItem("equation");
  result.innerHTML = localStorage.getItem("calculation");
}
function assignValue(value) {
  calculation += value;
  result.innerHTML = calculation;
  console.log(calculation);
}
function calculationResult() {
  const finalResult = eval(calculation);
  equation.innerHTML = calculation;
  result.innerHTML = Math.round(finalResult * 1000) / 1000;
  localStorage.setItem("calculation", finalResult);
  localStorage.setItem("equation", calculation);
  calculation = eval(calculation);
}
function resetCalculation() {
  calculation = "0";
  result.innerHTML = calculation;
  calculation = "";
  equation.innerHTML = "";
  localStorage.removeItem("calculation");
  localStorage.removeItem("equation");
}
