let name1 = "Bob";
let name2 = "Patrcik";

function longer(n1, n2){
    if(n1.length > n2.length){
        let length = n1.length - n2.length;
        return`${n1} is longer than ${n2} by ${length}`;
    }
    else{
        let length = n2.length - n1.length;
        return`${n2} is longer than ${n1} by ${length}`;
    }
}

console.log(longer(name1,name2));
