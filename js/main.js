/*Функция для поиска случайного числа только из положительного диапазона*/
const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  if(max < 0 || min < 0){
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

/*Функция для поиска случайного с плавающей точкой числа только из положительного 
диапазона с указаннымколличеством знаков после запятой*/
const randomFloat = (min, max, fixed) => {
  const rand = Number((min + Math.random() * (max + 1 - min)).toFixed(fixed));
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
