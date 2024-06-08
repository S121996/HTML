// var a;
// function f(a)
// {
//     let b=2
//     console.log(b);
//     console.log(a);
// }

console.log("3"+ +"3");//err
console.log(3+ "3");//3
console.log("3"+3);//6
console.log('3' +"3");//


let arr = [2, 3, 4, 5, 6];

let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 20

var arr1=[10,20,3,44,];
for(var i in arr1)
{
    console.log((i),arr1[i]);
}
