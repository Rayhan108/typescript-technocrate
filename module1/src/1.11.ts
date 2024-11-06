{

const age:number=18;
if(age>=18){
    console.log('adult');
}else{
    console.log('teneger');
}
const isAdult = age>18?'adult':'not adult';
console.log(isAdult);

//nullish coalessing
const isAuthenticate = null;
const result = isAuthenticate??'Guest';
console.log(result);
type User ={
    name:string;
    address:{
        city:string;
        road:string;
        presentAddress:string;
        permenentAddress?:string;

    }
}

const user : User ={
    name:'rayhan',
    address:{
        city:'Jamalpur',
        road:'Hashil',
        presentAddress:'Dhaka'
    }
}



const permenentAddress=user?.address?.permenentAddress??'no permenent address'
console.log({permenentAddress});







}