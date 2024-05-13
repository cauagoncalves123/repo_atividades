function first() {
    const num_a = 666;
    const num_b = 69;
    calc(num_a, num_b)
}

function calc(i_num_a, i_num_b) {
    e_diff = i_num_a / i_num_b;
    e_dbl = (i_num_a * 2) + (i_num_b * 3);
    e_tms = i_num_a * i_num_b;
    document.body.querySelector("#first").innerHTML = `diferença: ${e_diff}<br>calc: ${e_dbl}<br>vezes: ${e_tms}`;
}

function crescent_order(i_num_c, i_num_d) {
    if (i_num_c > i_num_d){
        return "A é maior que B";
    }else if(i_num_d > i_num_c){
        return "B é maior que A";
    }else {
        return "São iguais";
    }
}

function second(){
    let inss = 0;
    let sal_liq = 0;
    const func = {
        nome: document.getElementById("name").value,
        sal: document.getElementById("salario").value
    }
    console.log(func.nome)
    console.log(func.sal)
    if (func.sal <= 1412){
        // let inss = func.sal - (func.sal / (func.sal / 100 * 7.5))
        inss = func.sal / 100 * 7.5
        sal_liq = func.sal - inss
        
    }else if(2666 > func.sal){
        inss = func.sal / 100 * 9
        sal_liq = func.sal - inss
    }else if(4000 > func.sal){
        inss = func.sal / 100 * 12
        sal_liq = func.sal - inss
    }else if(7786 > func.sal){
        inss = func.sal / 100 * 14
        sal_liq = func.sal - inss
    }
    console.log(inss)
    console.log(sal_liq)
}   

function third(){
    let inss = 0;
    let sal_liq = 0;
    const func = {
        nome: document.getElementById("name2").value,
        sal: document.getElementById("salario2").value
    }
    console.log(func.nome)
    console.log(func.sal)
    if (func.sal <= 1412){
        // let inss = func.sal - (func.sal / (func.sal / 100 * 7.5))
        inss = func.sal / 100 * 8
        sal_liq = func.sal - inss
        
    }else if(2666 > func.sal){
        inss = func.sal / 100 * 8.5
        sal_liq = func.sal - inss
    }else if(4000 > func.sal){
        inss = func.sal / 100 * 9.5
        sal_liq = func.sal - inss
    }
    console.log(inss)
    console.log(sal_liq)
}