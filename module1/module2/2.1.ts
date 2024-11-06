{

//type assertion

let anything : any;

anything="L2 Web";
(anything as String)
const kgToGm = (value:string | number) : string | number | undefined=>{
    if(typeof value === 'string'){
        const convertedVlaue = parseFloat(value)*1000;
        return `the converted value is :${convertedVlaue}`;
    }
   if(typeof value === "number"){
    return value*1000
   } 
}
const result1 =kgToGm(1000) as number
type CustomError ={
    message:string;
}
try{

}catch(error){
console.log((error as CustomError).message);
}

//
}