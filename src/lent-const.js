/**let scope should be inside a block and const should be constant 
 * we coult not reasign a const variable but we can reassign of let variable within a block
 * 
 */
const constVar="kirshan";
//constVar="lal";    if we reassign we will get error

console.log(constVar);//kirshan

let name="kirshan";
console.log(name);// output-->kirshan
name="lal"; 
console.log(name);//output--> lal

for(let i=0;i<5;i++){
console.log(i);
}
//console.log(i); here we get error b/c we could'nt get let variable outside block
