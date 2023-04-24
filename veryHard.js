let running = true;

while(running){
    let validn1 = false;
    let n1 = null;
    let n2 = null;
    let sign = null;

    while(!validn1){
        n1 = prompt('Input the first number');
        console.log(n1.match(/[0-9]/g ) != null);
        if(n1.match(/[0-9]/g)  != null){
            validn1 = true;
        }
        else{
            alert("Not a Valid Number");
        }
    }
    let validsign = false;
    while(!validsign){
        sign = prompt('Input the sign number');
        if(sign.match(/[\+\-\*/]/g)  != null && sign.match(/[a-z0-9]/gi) == null){
            validsign = true;
        }
        else{
            alert("Not a Valid Sign");
        }
    }
    let validn2 = false;
    while(!validn2){
        n2 = prompt('Input the second number');
        if(n2.match(/[0-9]/g)  != null){
            validn2 = true;
        }
        else{
            alert("Not a Valid Number");
        }
    }

    if(validn1 && validn2 && validsign){
       switch (sign){
         case "+":
            alert(add(n1,n2));
            break; 
        case "-":
            alert(subtract(n1,n2));
            break;
        case "/":
            alert(divide(n1,n2));
            break;  
        case "*":
            alert(multiply(n1,n2));
            break;
         default:
            alert("unexpected error plz try again");

       }
    }
   
}

function add(num1,num2){
 return (Number(num1) + Number(num2));
}

function subtract(num1,num2){
    return (Number(num1) - Number(num2));
}

function multiply(num1,num2){
    return (Number(num1) * Number(num2));
}

function divide(num1,num2){
    return (Number(num1) / Number(num2));
}
