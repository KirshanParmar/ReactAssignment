function sumElements(...args){
  console.log(args);
  let sum=0;
  for(const arg of args){
      sum+=arg;
  }
  return sum;
}
console.log('Total Sum Is: ' +sumElements(2,3,4,6,8));
