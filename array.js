
// Numbs = [1, 3, 5, 7]
// let index = 3;
// console.log(`index of position ${index} return value ${Numbs.at(index)}`);
// .at() methoded is a function of array and index on position value are what..? on the basis what is equal of index value.

// const marvel = ['thor', 'hulk', 'captain america']
// const dc = ['batMan', 'superMan', 'superWomen']
// const heros = marvel.concat(dc);
// console.log(heros);
// what is work of .concat() function..?
// .concat is a function of a array and one array to second array veriable of value how to attach in third variable from print.


// class polygn{
//     constructor() {         //this.name with constructor get the value  
//         this.name = 'vishal'
//     }
// }
// const poly1 = new polygn();
// console.log(poly1.name);

const marvelHero = ['thor', 'hulk', 'captain america']
const dcHero = ['batMan', 'superMan', 'superWomen']

// marvelHero.push(dcHero);         // .push not a proper merge of two array data. it is direct include insde of array to another array. 
// console.log(marvelHero);
// console.log(marvelHero[3][1]);

// const allHero = marvelHero.concat(dcHero);      // .concat a propere were to mearge one array to another array.
// console.log(allHero);

// const spreadHero = [...marvelHero, ...dcHero]       // [...spread, ...spread] as to compair .concat and .push is lengthey process.
// console.log(spreadHero);

const another_array = [1, 2, 4, 5, [4, 5, 6], 8, [4, 3, 1, [1, 3, 7]]]
const real_another_array = another_array.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

// how to make a array from another of dataType ..?
// ans:- .from
// example:-
console.log(Array.isArray("vishal"))
console.log(Array.from("vishal"))

score1 = 100
score2 = 200
score3 = 300
console.log(Array.of(score1,score2,score3)); // .of is like same work of .from