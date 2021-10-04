let clearButton = document.getElementById("clearButton");
let backspaceButton = document.getElementById("backspaceButton");
let percentButton = document.getElementById("percentButton");
let divideButton = document.getElementById("divideButton");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonMinus = document.getElementById("buttonMinus");
let buttonPlus = document.getElementById("buttonPlus");
let buttonCalculate = document.getElementById("buttonCalculate");

let buttonDott = document.getElementById("buttonDott");


let button00 = document.getElementById("button00");
let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");

let output_value = document.getElementById("output_value");
let history_value = document.getElementById("history_value");




button00.onclick = ()=>{
    let numValue = "00"

    output_value.innerText += numValue;

    if (output_value.innerText=== "000") {
        output_value.innerText = "00";
    }
}


button0.onclick = ()=>{
    let numValue = "0"
    output_value.innerText += numValue;
}


button1.onclick = ()=>{
    let numValue = "1"
    output_value.innerText += numValue;
    if (output_value.innerText=== "01") {
        output_value.innerText = "1";
    }
}


button2.onclick = ()=>{
    let numValue = "2"
    output_value.innerText += numValue;
    if (output_value.innerText=== "02") {
        output_value.innerText = "2";
    }
}

button3.onclick = ()=>{
    let numValue = "3"
    output_value.innerText += numValue;
    if (output_value.innerText=== "03") {
        output_value.innerText = "3";
    }
}


button4.onclick = ()=>{
    let numValue = "4"
    output_value.innerText += numValue;
    if (output_value.innerText=== "04") {
        output_value.innerText = "4";
    }
}


button5.onclick = ()=>{
    let numValue = "5"
    output_value.innerText += numValue;
    if (output_value.innerText=== "05") {
        output_value.innerText = "5";
    }
}


button6.onclick = ()=>{
    let numValue = "6"
    output_value.innerText += numValue;
    if (output_value.innerText=== "06") {
        output_value.innerText = "6";
    }
}


button7.onclick = ()=>{
    let numValue = "7"
    output_value.innerText += numValue;
    if (output_value.innerText=== "07") {
        output_value.innerText = "7";
    }
}


button8.onclick = ()=>{
    let numValue = "8"
    output_value.innerText += numValue;
    if (output_value.innerText=== "08") {
        output_value.innerText = "8";
    }
}


button9.onclick = ()=>{
    let numValue = "9"
    output_value.innerText += numValue;
    if (output_value.innerText=== "09") {
        output_value.innerText = "9";
    }
}

buttonDott.onclick = ()=>{
        
        let dotValue = ".";

            output_value.innerText += dotValue;

}





// Operators

clearButton.onclick = ()=> {
    output_value.innerText = "0";
    history_value.innerText = "";
};



backspaceButton.onclick=()=>{
    let long = output_value.innerText.length-1;

    output_value.innerText = output_value.innerText.substring(0, long)

    if (output_value.innerText === "") {
        output_value.innerText = "0";
        history_value.innerText = "";
    }
}



percentButton.onclick=()=>{
    output_value.innerText += "%";

    if (output_value.innerText === "+","-","÷","*") {
        let originalOperation = output_value.innerHTML;
        let changedOperation = originalOperation.replace(/\-|\+|\*|\%{2}|\÷/g, "");
        output_value.innerText = changedOperation;
    } 
                
}


divideButton.onclick=()=>{
    output_value.innerText += "/";

    if (output_value.innerText === "+","-","%","*") {
        let originalOperation = output_value.innerHTML;
        let changedOperation = originalOperation.replace(/\-|\+|\*|\%|\÷{2}/g, "");
        output_value.innerText = changedOperation;
    } 

}


buttonMultiply.onclick=()=>{
    output_value.innerText += "*";

    let originalOperation = output_value.innerHTML;

    if (output_value.innerText === "+","-","%","÷") {
        let changedOperation = originalOperation.replace(/\-|\+|\÷|\%|\*{2}/g, "");
        output_value.innerText = changedOperation;
    } 
}


buttonMinus.onclick=()=>{
    output_value.innerText += "-";

    if (output_value.innerText === "+","*","%","÷") {
        let originalOperation = output_value.innerHTML;
        let changedOperation = originalOperation.replace(/\-{2}|\+|\÷|\%|\*/g, "");
        output_value.innerText = changedOperation;
    } 
}


buttonPlus.onclick=()=>{
    output_value.innerText += "+";

    if (output_value.innerText === "*","-","%","÷") {
        let originalOperation = output_value.innerHTML;
        let changedOperation = originalOperation.replace(/\-|\+{2}|\÷|\%|\*/g, "");
        output_value.innerText = changedOperation;
    } 
}



// Calculate all



buttonCalculate.onclick = ()=>{
    let calculateInside = output_value.innerText;

    history_value.innerText = calculateInside;
    output_value.innerText = eval(calculateInside);
}