function sumElements(a,b,...args){
    console.log(args);
    let multi=a*b;
    console.log("Multi first two elements: "+multi);

    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    console.log("Total sum is:"+sum);
    return [sum,multi];
  }
  console.log('Return Sum and Multi: ' +sumElements(2,3,4,6,8));
  