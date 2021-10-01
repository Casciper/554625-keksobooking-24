function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1,100));



function randomFloat(min, max, fixed) {
  let rand = Number((min + Math.random() * (max + 1 - min)).toFixed(fixed));
  return rand;
}

console.log(randomFloat(1,100,2));