function calculate(){
    let op = document.getElementById("op").selectedOptions[0].value;
    console.log(op)
    let res = document.getElementById("resposta");
    let val1 = parseInt(document.getElementById("num1").value);
    let val2 = parseInt(document.getElementById("num2").value);
    if (op == "+") {
        res.innerHTML = val1 + val2;
    }else if (op == "-") {
        res.innerHTML = val1 - val2;
    }else if (op == "x") {
        res.innerHTML = val1 * val2;
    }else if (op == ":") {
        res.innerHTML = val1 / val2;
    }
    }
    