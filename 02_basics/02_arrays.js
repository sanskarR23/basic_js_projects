const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


//--------------- sperad operation for merge two or more array --------------------//

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const another_array = [1,2,3,[4,5], 6,[7,8,[2,3]],4,5]
const real_another_array = another_array.flat(1)
const real1_another_array = another_array.flat(Infinity)

console.log(real_another_array);
console.log(real1_another_array);


console.log(Array.isArray("Sanskar"))
console.log(Array.from("Sanskar"))
console.log(Array.from({name: "sanskar"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


