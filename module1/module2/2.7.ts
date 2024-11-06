{
//generic constraints with keyof operator


type Vehicle ={
    bike:string,
    car:string,
    ship:string
}

type Owner = "bike"|"car"|"ship";//manualy

type Owner2 = keyof Vehicle   // new format of (type Owner = "bike"|"car"|"ship");


const user ={
    name:'Mr. persian',
    age:26,
    addresss:'ctg'
}
// user['name'] // => give us user name

const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{
    return obj[key];
}
const result1=getPropertyValue(user,'name')









    //
}