// *** YOUR ANSWER BELOW ***

function roundedDivision(x,y){
    let divisor = x / y;
    let remainder = x % y;
    let subtractor = remainder / y;
    return divisor - subtractor;
}
console.log(roundedDivision(9,4));