window.onload = function() {
  button.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("num1").value)
    let select = document.getElementById("select").value
    let num2 = parseInt(document.getElementById("num2").value)
    let result = document.getElementById("result")
    let button = document.getElementById("button")

    if(isNaN(num1) || isNaN(num2)) {
      x = "Devi inserire dei numeri!!"
    } else {
    if(select == "Somma") {
    x = sum(num1, num2)
  } else if (select == "Sottrazione") {
    x = sub(num1, num2)
  } else if (select == "Divisione") {
    x = div(num1, num2)
  } else if (select == "Moltiplicazione") {
    x = mult(num1, num2)
  } }
    result.value = x
});
}


function sum(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function div(a, b) {
  return a / b
}

function mult(a, b) {
  return a * b
}
