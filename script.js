// BMI = mass / height ** 2

// BMI < 18.5
//   ? console.log("the person is underweight")
//   : BMI >= 18.5 && BMI < 25
//   ? console.log("the person is of healthy weight")
//   : BMI >= 25 && BMI < 30
//   ? console.log("the person is overweight")
//   : console.log("the person is within the obesity range");

let button = document.querySelector("#btn");
button.addEventListener("click", calculateBMI);

function calculateBMI() {
  let height = Number(document.querySelector("#height"));
  let weight = Number(document.querySelector("weight"));
  let result = document.querySelector("#result");

  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid weight!";
  else {
    let bmi = (weight / ((height * height) / 1000)).toFixed(2);
    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else if (bmi >= 25 && bmi < 30)
      result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    else result.innerHTML = `Obesity: <span>${bmi}</span>`;
  }
}
