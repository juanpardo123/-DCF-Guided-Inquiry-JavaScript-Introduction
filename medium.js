let shout = "HELLOOOOO"
let whisper = "helloooo"
let neither = "HellO"

let running = true;

while(running){
    let input = prompt('Type you message');
    if(input.toLocaleLowerCase == "quit"){
        running = false;
    }
    evaluator(input);
}




function evaluator(word){
if(word.match(/[A-Z]/g) != null && word.match(/[a-z]/g) == null){
    console.log("shout");

}
else if(word.match(/[A-Z]/g) == null && word.match(/[a-z]/g) != null){
    console.log("whisper");
}
else{
    console.log('Neither')
}
}