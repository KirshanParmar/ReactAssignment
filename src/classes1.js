class myClass{
    constructor(name,lastname,email,password){
     this.name=name;
     this.lastname=lastname;
     this.email=email;
     this.password=password;
    }
    sayHello(){
        console.log(`Hi ${this.name} ${this.lastname}`);
    }

}
class myProfile extends myClass{

    myProfiles(){
        console.log(`My Email is Is: ${this.email} That and Password Is: ${this.password}`);
    }

}
const profile=new myProfile("kirshan","lal","kirshan@gmail.com","1234");
profile.sayHello();
profile.myProfiles();