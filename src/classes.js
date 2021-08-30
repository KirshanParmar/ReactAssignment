class myClass{
    constructor(name,lastname,email,age){
    this.name=name;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
}
}
const Person= new myClass("kirshan","lal","kirshan@gmail.com",20);
console.log(Person.name)// kirshan
console.log(Person.lastname)// lal
console.log(Person.email)// kirshan@gmail.com
console.log(Person.age)// 20