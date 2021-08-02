let userNAme = prompt("what is your name");
alert("welcome to my page " + userNAme);



let Q1 = prompt("am i from jordan").toUpperCase();
console.log(Q1);
switch (Q1){
    case "YES":
        alert("TRUE");
        break;
        case "NO":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}

let Q2 = prompt("am i studying in LTUC (ASAC) ?").toUpperCase();

switch (Q2){
    case "YES":
        alert("TRUE");
        break;
        case "NO":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
let Q3 = prompt("Do i like shoter games ?").toUpperCase();
console.log(Q3);
switch (Q3){
    case "NO":
        alert("TRUE");
        break;
        case "YES":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
let Q4 = prompt("Do i have 15k hour playing Dota ?").toUpperCase();
switch (Q4){
    case "YES":
        alert("TRUE");
        break;
        case "NO":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
let Q5 = prompt("my fav meal is falafel ?").toUpperCase();
switch (Q5){
    case "NO":
        alert("TRUE");
        break;
        case "YES":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
let feedBack = prompt("did you like my page? ").toUpperCase();
switch (feedBack){
    case "NO":
        alert("no one care");
        break;
        case "YES":
        alert("thanks ");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}