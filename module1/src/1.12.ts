{
const searchName =(value:string)=>{
    if(value){
        console.log('searching');
    }else{
        console.log('nothing to search');
    }
    
}
searchName('Rayhan');
// searchName(null);


const getSpeedInMeterPerSecond=(value:unknown)=>{
    if(typeof value ==='number'){
        const convertedSpeed=(value*1000)/3600;
        console.log(`the speed is ${convertedSpeed} ms^-1`);
    }else if(typeof value === 'string'){
        const [result,unit]=value.split("");
        // console.log(result);
        const convertedSpeed=(parseFloat(result)*1000)/3600;
        console.log(`the speed is ${convertedSpeed} ms^-1`);
    }else{
        console.log('wrong input');
    }
}
getSpeedInMeterPerSecond('1000 kmh^-1')

const throwError=(msg:String):never=>{
    throw new Error(msg);
}

throwError("error")









}