{
// function with generics
const createArray =(param:string):string[]=>{
    return [param]
}
const createArrayWithGeneric =<T>(param:T):T[]=>{
    return [param]
}

const res1 = createArray('Bd')
const res2 = createArrayWithGeneric<string>('Bd')
interface User{id:number;name:string}
const resGenericObj=createArrayWithGeneric<User>({id:1108,name:'Mr.Pashan'})



const createArrayWithTuple =<T,R>(param1:T,param2:R):[T,R]=>{
    return [param1,param2]
}

const res3 = createArrayWithTuple<string,number>('Bd',1108)
const res4 = createArrayWithTuple<string,{name:string}>('Bd',{name:'Rayhan'})


const addCourseToStudent=<T>(student:T)=>{
    const course='next level web dev'
    return{
        ...student, course
    }
}
const student1= addCourseToStudent({name:'x',email:'x@gmail.com',devType:'NLWD'})
const student2= addCourseToStudent({name:'y',email:'y@gmail.com',wristWatch:'apple'})





    // 
}