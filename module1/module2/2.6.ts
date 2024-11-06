{
//constraints


const addCourseToStudent=<T extends {name:string;id:number;email:string;}>(student:T)=>{
    const course='next level web dev'
    return{
        ...student, course
    }
}
const student1= addCourseToStudent<{
    name: string;
    id: number;
    email: string;
    devType: string;
}>({name:'x',
    id:1108,email:'x@gmail.com',devType:'NLWD'})
const student2= addCourseToStudent<{
    name: string;
    id: number;
    email: string;
    wristWatch: string;
}>({name:'y',id:1100,email:'y@gmail.com',wristWatch:'apple'})
















    //
}