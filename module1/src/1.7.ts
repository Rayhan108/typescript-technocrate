{
 

const poorUser={
    name:"mr x",
}

   //spread operator
   
   

const bros1 : string[]=['mir','firoz','mizan' ]
const bros2 : string[]=['tonmoy','nahid','rahat']

bros1.push(...bros2);   
}
const mentors1={
    typescript:'mezba',
    redux:'Mir',
    dbms:'Mizan'
}
const mentor2={
    prisma:'Firoz',
    next:'tonmoy',
    cloud:'Nahid'
}
const mentorList ={
    ...mentors1,
    ...mentor2
}
 //rest operator
 const greetFriends=(...friends:string[])=>{
    
    // friends.forEach((friend:string)=>console.log(`Hi ${friend1} ${friend2} ${friend3}`);)
 }
 greetFriends("Abul","kabul","babul","ubul")