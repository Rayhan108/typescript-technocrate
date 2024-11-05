{
//union type
    type Frontend = 'fakibaz'|'junior developer';
    type User ={
    
    name:string;
    email:string;
    gender:'male'|'female';
    bloodgroup:'o+'|'A+'|'AB+';
    }
    const user1 : User={
        name:'Rayhan',
        gender:'male',
        bloodgroup:'o+',
        email:'rayhan@gmail.com'
    
    }
    //intersection

    type FrontendDev={
        skills:string[];
        designation1:'frontend Dev'
    }
    type BackendDev={
        skills:string[];
        designation2:'backend Dev'
    }
type Fullstack = FrontendDev & BackendDev;
const fullStackDev : Fullstack={
    skills:['html','css','express'],
    designation1:'frontend Dev',
    designation2:'backend Dev'
}

}