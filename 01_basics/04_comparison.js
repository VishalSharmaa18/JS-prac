// console.log(2>2)
// console.log(2<2)
// console.log(2>=1)
// console.log(2!=2)
// console.log(2==2)

// console.log("2">1)
// console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

 // Note=> The reason is that an equality check == and comparisons > < >= <= works diffrently.
 //        Comparison converts null to a number, treating it as a 0.That's why null >=0 
 //         is treated as true and null >0 is false.

 console.log(undefined>0);
 console.log(undefined==0);
 console.log(undefined>=0);

//  The key difference between null and undefined in numerical comparisons is how 
// they are converted to numbers:
//  undefined converts to NaN
//  null converts to 0