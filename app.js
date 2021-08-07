'use strict';
let counter = 0;
let userNAme = prompt("what is your name");
alert("welcome to my page " + userNAme);


function Q1(){
let Q1 = prompt("am i from jordan").toUpperCase();
console.log(Q1);
switch (Q1){
    case "YES":
        alert("TRUE");
        counter++;
        break;
        case "NO":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
return Q1;
}
Q1();


function Q2(){
let Q2 = prompt("am i studying in LTUC (ASAC) ?").toUpperCase();

switch (Q2){
    case "YES":
        alert("TRUE");
        counter++;
        break;
        case "NO":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
return Q2;
}
Q2();

function Q3(){
let Q3 = prompt("Do i like shoter games ?").toUpperCase();
console.log(Q3);
switch (Q3){
    case "NO":
        alert("TRUE");
        counter++;
        break;
        case "YES":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
return Q3;
}
Q3();

function Q4(){
let Q4 = prompt("Do i have 15k hour playing Dota ?").toUpperCase();
switch (Q4){
    case "YES":
        alert("TRUE");
        counter++;
        break;
        case "NO":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
return Q4;
}
Q4();

function Q5(){
let Q5 = prompt("my fav meal is falafel ?").toUpperCase();
switch (Q5){
    case "NO":
        alert("TRUE");
        counter++;
        break;
        case "YES":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;


 }
 return Q5;

}
Q5();



function Q6(){
for (let i = 0; i < 4 ; i++) {

     let Q6 = prompt("gess my favorite number ")

    if (Q6 == 5) {

        alert('correct anwser')
        counter++;
        break;
    }

    else (Q6 != 5); {
        alert('encorrect')
    }
    console.log(i);
    if ( i == 3 ){
        alert("the correct anwser is 5")
    }


}
return Q6;

}
Q6();


function Q7(){
let cars = ["tESLA", "VOLVO", "BMW"];

for (let i = 0; i < 6; i++) {

    let Q7 = prompt("gess my favorite care");


    for (let j = 0; j < cars.length; j++) {

        


        if (Q7 == cars[j]) {

            alert('correct anwser');
            counter++;
            i = 6;
            break;
        }

        
    }
    if(i == 5 ){
        alert("the correct anwser is tesla , volvo, bmw ");
    }
    }

    return Q7;

}
Q7();
    


        



    















let feedBack = prompt("did you like my page? ").toUpperCase();
switch (feedBack) {
    case "NO":
        alert("no one cares about you");
        break;
    case "YES":
        alert("thanks ");
        break;
    default:
        alert("Wrong answer please answer yes or no")
        break;
}

alert('your got ' + counter  + 'of 7 ');

alert('WP');