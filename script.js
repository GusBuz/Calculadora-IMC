const weight = document.getElementById("weightKg");
const height = document.getElementById("heightM");
const resultInput = document.querySelector(".resultBMI");
const calculator = document.querySelector(".calculator")
const resultBox = document.querySelector(".result")
const layout = document.querySelector(".layout")
const screen = window.matchMedia("(max-width: 550px)")
const classifications = document.querySelectorAll(
  ".classification1, .classification2, .classification3, .classification4, .classification5, .classification6"
)
const buttonCalculate = document.querySelector(".calculate");
const buttonClear = document.querySelector(".clear")


function calculate() {
  var resultOutput = weight.value / (height.value * height.value)
  console.log(resultOutput)

  if (isNaN(resultOutput)) {
    //resultInput.value = ""
    return
  } else {
    resultInput.value = Math.round(resultOutput * 10) / 10
  }

  classifications.forEach((element) => {
    element.style.background = "#FAF7F0"
  })

  if (resultInput.value < 18.5) {
    document.querySelectorAll(".classification1").forEach((element) => {
      element.style.background = "#b4dbec"
    })
  } else if (resultInput.value < 24.9) {
    document.querySelectorAll(".classification2").forEach((element) => {
      element.style.background = "#b4dbec"
    })
  } else if (resultInput.value < 29.9) {
    document.querySelectorAll(".classification3").forEach((element) => {
      element.style.background = "#b4dbec"
    })
  } else if (resultInput.value < 34.9) {
    document.querySelectorAll(".classification4").forEach((element) => {
      element.style.background = "#b4dbec"
    })
  } else if (resultInput.value < 39.9) {
    document.querySelectorAll(".classification5").forEach((element) => {
      element.style.background = "#b4dbec"
    })
  } else if (resultInput.value > 40) {
    document.querySelectorAll(".classification6").forEach((element) => {
      element.style.background = "#b4dbec"
    })
  }

  if (screen.matches) {
    layout.style.height = "130vh"
    calculator.style.height = "805px"
    resultBox.style.display = "flex"
    resultBox.style.visibility = "visible"
    resultBox.style.animation = "fadeIn 1s"
    resultBox.style.opacity = "1"
  } else {
    calculator.style.height = "525px"
    resultBox.style.display = "flex"
    resultBox.style.visibility = "visible"
    resultBox.style.animation = "fadeIn 1s"
    resultBox.style.opacity = "1"
  }

  window.scrollTo({top: 200, behavior: "smooth"})
  
  
}

function clear() {

  weight.value = ""
  height.value = ""

  if (screen.matches) {
    layout.style.height = "100vh"
    resultBox.style.animation = "fadeOut 1s"
    resultBox.style.opacity = "0"
    calculator.style.height = "440px"
  } else {
    resultBox.style.animation = "fadeOut 1s"
    resultBox.style.opacity = "0"
    calculator.style.height = "270px"
  }

  setTimeout(() => {
      resultBox.style.display = "none"
      resultBox.style.visibility = "hidden"
  }, 1000);
}

buttonCalculate.onclick = calculate;
buttonClear.onclick = clear;
