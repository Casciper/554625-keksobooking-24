function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
randomInteger(1,100);
console.log(randomInteger(1,100));



function randomFloat(min, max, fixed) {
  let rand = Number((min + Math.random() * (max + 1 - min)).toFixed(fixed));
  return rand;
}
randomFloat(1,100,2);
console.log(randomFloat(1,100,2));