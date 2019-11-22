// *** YOUR ANSWER BELOW ***

function quotient(x,y){
    let divide = x / y;
    let remainder = x % y;
    let discard = remainder / y;
    // divide - discard;
    return (x-(x%y))/y;
}
console.log(quotient(10,3));


