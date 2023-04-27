function calculator() {
    let num1 = document.getElementById('nu1').value
    let num2 = document.getElementById('nu2').value
    const dropdown = document.getElementById("myDropdown");
    const operator = dropdown.value;
    let Aresult=document.getElementById('res')
     
    console.log(operator);

    let result
    switch (operator) {
        case "+":
            result = Number(num1) + Number(num2);
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(result);

   
     Aresult.innerText=result
}