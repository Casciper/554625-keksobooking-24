const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  if(max < 0 || min < 0){
    window.console.log('В диапозоне доступны только положительные числа...');
  }else if(min > max){
    window.console.log('Минимальное значение не может быть больше максимального...');
  }else{
    return Math.floor(rand);
  }
};
randomInteger(1,100);

const randomFloat = (min, max, fixed) => {
  const rand = Number((min + Math.random() * (max + 1 - min)).toFixed(fixed));
  if((max < 0) || (min < 0)){
    window.console.log('В диапозоне доступны только положительные числа...');
  }else if(min > max){
   window.console.log('Минимальное значение не может быть больше максимального...');
  }else{
    return rand;
  }
};
randomFloat(1,100,2);
