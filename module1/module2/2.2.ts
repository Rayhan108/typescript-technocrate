{

//interface
type User1 = {
    name: string;
    age:number;
}

interface User2{
    name:string;
    age:number;
}


const user1:User1={
    name:"Rayhan",
    age:23,
    }
    const user2:User2={
    name:"Rayhan",
    age:23,
    }

type userRole1 = User1 & {role:string}

const user:userRole1={
    name:"Rayhan",
    age:23,
    role:'manager'
    }

interface UserRole2 extends User1{
role:string
}

const user3:UserRole2={
    name:"Rayhan",
    age:23,
    role:'manager'
    }

type Roll=number[];
interface Roll1{
    [index:number]:number
}
const Roll=[1,2,3]
const Roll1=[1,2,3,5]



type Add=(num1:number,number2:number)=>number;
interface Add1{
    (num1:number,num2:number):number
}
const add:Add =(num1,num2)=>num1+num2;
const add1:Add1 =(num1,num2)=>num1+num2;

    //
}