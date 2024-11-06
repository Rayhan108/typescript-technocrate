{
//generic with interface
interface Developer<T,X= null>{
    name:string,
    computer:{
        brand:string;
        model:string,
        releaseYear:number
    }
    smartWatch:T,
    bike? : X
}
type Emilab ={
        brand:string;
        model:string;
        display:string;
}
const poorDeveloper : Developer<
     Emilab
    
>={
    name:'rayhan',
    computer:{
        brand:'hp',
        model:'du3037tx',
        releaseYear:2020
    },
    smartWatch: {
        brand:'Emilab',
        model:'kw66',
        display:'OLED'
    },
};
interface Apple {
    brand:string,
    model:string,
    display:string,
    heartTrack:boolean,
    sleepTrack:boolean;
}
interface Bike{
    brand:string,
    model:string,
}
const richDeveloper : Developer<Apple,Bike>={
    name:'rich dev',
    computer:{
        brand:'apple',
        model:'du30tx',
        releaseYear:2020
    },
    smartWatch: {
        brand:'Apple',
        model:'w66',
        display:'OLED',
        heartTrack:true,
        sleepTrack:true
    },
    bike:{
        brand:'yamaha',
        model:'mature350'
    }
}








    //
}