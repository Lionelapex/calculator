

const title=document.querySelector("h1.tittle")

const first_num = 5;
const Second_num = 4;
const operator = "*";


const calculator = {  //calcuor functions 
	name: "calc",
	add: (num1, num2) => {
		return console.log(num1 + num2);
	},
	subtract: (num1, num2) => {
		return console.log(num1 - num2);
	},
	multiply: (num1, num2) => {
		return console.log(num1 * num2);
	},
	divide: (num1, num2) => {
		return console.log(num1 / num2);
	},
};

const operate = (num1, operator, num2) => {  //operate
	if (operator === "+") {
		calculator.add(num1, num2);
	}
    if (operator === "-") {
		calculator.subtract(num1, num2);
	}
    if (operator === "*") {
		calculator.multiply(num1, num2);
	}
    if (operator === "/") {
		calculator.divide(num1, num2);
	}
    
};
operate(first_num, operator, Second_num);


 const displayTittle=()=>{
    title.innerHTML+=calculator.name
	
 }
 displayTittle()