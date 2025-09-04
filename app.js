let display=document.getElementById('display');         

function appendValue(value){
    if(display.innerText===0 || display.innerText===null){
        display.innerText=value;
    }
    else{
        display.innerText+=value;    
        
}
console.log(display.innerText);
}

//clear display

function clearDisplay(){
    display.innerText=0;
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

function remove(){
    display.innerText=display.innerText.slice(0,-1);

}
function convert(){
  window.location.href="currencyconvert.html";
}

function trignometry(){
  window.location.href="trignometry.html";
}


document.addEventListener("keydown", function(e) {
    const key = e.key;

    // Valid numbers and operators
    const validKeys = "0123456789+-*/().";

    if (validKeys.includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        remove();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }

    // Prevent default browser actions for keys like Enter
    e.preventDefault();
});