/*Функция для поиска случайного числа только из положительного диапазона*/
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  if((max < 0) || (min < 0)){
    console.log('В диапозоне доступны только положительные числа...');
    return
  }else if(min > max){
    console.log('Минимальное значение не может быть больше максимального...');
    return
  }else{
  return Math.floor(rand);
  }
}
randomInteger(1,100);
console.log(randomInteger(1,1000));

/*Функция для поиска случайного с плавающей точкой числа только из положительного 
диапазона с указаннымколличеством знаков после запятой*/
function randomFloat(min, max, fixed) {
  let rand = Number((min + Math.random() * (max + 1 - min)).toFixed(fixed));
  if((max < 0) || (min < 0)){
    console.log('В диапозоне доступны только положительные числа...');
    return
  }else if(min > max){
    console.log('Минимальное значение не может быть больше максимального...');
    return
  }else{
  return rand;
  }
}
randomFloat(1,100,2);
console.log(randomFloat(1,100,0));