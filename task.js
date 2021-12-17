
const pi = 3.14;

function areaCalculate(radius){
    const area = pi * (Math.pow(radius,2));
    return area;
}

if(process.argv.slice(2)[0]){
    const consoleNumber = process.argv.slice(2)[0];
    console.log(areaCalculate(consoleNumber));
}else{
    console.log('Please enter number');
}  