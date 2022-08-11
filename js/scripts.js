//Business Logic 
// **Each function assumes that that the args in function call have already had parseInt run on them.
function add(num1, num2){
  return (num1 + num2);  
} 

function sub(num1, num2){
  return (num1-num2); 
}

function mult(num1, num2){
  return (num1 * num2); 
}

function divide(num1, num2){
  return (num1 / num2); 
} 


//UI Logic 
function handleCalc(event){ //Assumption:  'event' object in question is 'onsubmit'. 
  event.preventDefault(); 
  
  const n1 = parseInt(document.getElementById("number1").value);  //Retrieves entered value from doc, runs it thru ParseInt(). 
  console.log("1st Num: " + n1); 
  const n2 = parseInt(document.getElementById("number2").value);  //Retrieves entered value from doc, runs it thru ParseInt().
  console.log("2nd Num: " + n2);
  const operator = document.querySelector("input[name='sign']:checked").value;  //Retrieves and stores the selected mathematical operation. 
  console.log("Operator: " + operator); 

  //If-else branching 
  let result; //Tells JS that this variable exists. Its value is 'undefined', and will remain so until another value is assigned to it.  
  if (operator === "add"){ 
    result = add(n1, n2); 
  }else if (operator === "subtract"){
    result = sub(n1, n2); 
  }else if (operator === "multiply"){
    result = mult(n1, n2); 
  }else if (operator === "divide"){
    result = divide(n1, n2); 
  } 

  document.getElementById("answer").innerText = result; 
} 

window.addEventListener("load", function(){
  const form = document.getElementById("radio-form"); 
  form.addEventListener("submit", handleCalc);
}); 