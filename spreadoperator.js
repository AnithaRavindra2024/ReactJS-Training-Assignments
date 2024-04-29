// Spread Operator with Arrays

const array1={firstName : 'Anitha' , age:43};
const array2= {lastName:'Ravindra' ,city:'Bangalore'};

const array3={National:'Indian',...array1,Pannumber:'AFHPR101',...array2 ,country:'India'};

console.log(array3);

//Output National:"Indian" Pannumber : "AFHPR101" age: 43  city: "Bangalore" country: "India" 
//firstName: "Anitha" lastName: "Ravindra"

//Spread Operator with Objects

const empdetails={fullname :'Anitha',dept:'CSS'};
const emp1details={username:'Ravi',dept:'AMS'};

const employee={...empdetails,...emp1details};

console.log(employee);

//Output dept:"AMS" fullname: "Anitha" username: "Ravi"

//Spread Operator in Function Calls

function sum(x,y,z){
    return x + y + z ;
    }

    var numbers=[0,3,5];
    let result = sum (...numbers);

    console.log("Sum of Numbers is " +result);

   //Output Sum of Numbers is 8