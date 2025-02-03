const name = "Vishal";
const repoCount = 50;

//console.log(name + ' '+ repoCount) this is a bad way of doing things..

console.log(`my name was ${name} and my repocount was ${repoCount}`);


const myName = new String("Virat Kohli")
console.log(myName[1]);

console.log(myName.charAt(3));
console.log(myName.indexOf('V'));

const newString = myName.substring(1,4)
console.log(newString);

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
console.log(str.slice(1,10));
console.log(str.slice(-1,-5));

const str2= "Hellt World";
console.log(str2.slice(-5, -1));



