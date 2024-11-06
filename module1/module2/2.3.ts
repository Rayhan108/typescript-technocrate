{
//generic type
 type GenericArray<T> = Array<T>

// const rollNumbers : number[]= [3,7,8]
const rollNumbers : GenericArray<number>= [3,7,8]

// const mentors : string[]= ['x','y','z']
const mentors : GenericArray<string>= ['x','y','z']

// const boolArray : boolean[]=[true,false,true]
const boolArray : GenericArray<boolean>=[true,false,true]

const add =(x:number,y:number)=>x+y;
const user : GenericArray<{name:string,age:number}> = [
    {
        name:'mezba',
        age:100
    },
    {
        name:'jhankar',
        age:90
    }
]
add(10,30);
//generic tuple

type GenericTuple<x,y>=[x,y]


// const manush : [string,string]= ['Mr. X','Mr. Y']
const manush : GenericTuple<string,string>= ['Mr. X','Mr. Y']

const UserWithId : GenericTuple<number,{name:string,email:string}>=[1234,{name:'persian',email:'a@gamil'}]


    //
}