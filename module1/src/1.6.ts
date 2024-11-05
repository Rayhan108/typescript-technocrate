//Learning function
{
function add(num1: number,num2:number=10):number{
    return num1+num2;
}
add(2,2)

const addArrow=(num1:number,num2:number):number=>num1+num2;

//object er vitor function thakle seta method 
const poorUser={
    name:"Rayhan",
    banlace:0,
    addBalance(balance:number):string{
        return `my new balace is : ${this.banlace+balance}`
    }
}
//array map
const arr: number[]=[1,4,10];
const newArr : number[] = arr.map((elemnt:number):number=>elemnt*elemnt);
}