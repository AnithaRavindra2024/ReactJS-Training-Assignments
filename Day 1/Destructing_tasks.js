//Array Destructuring

const fruits =['Apple','Banana','Cherry'];

const [a,b,c] = fruits;
console.log(a); //Output Apple
console.log(c); //Output Cherry

//Object Destructuring 

const user = {firstName :"Anitha" ,lastName : "Ravindra" , email:"anitha.r@metricstream.com"};

const {firstName} =user;
const {lastName}=user;
const {email} = user;

console.log("First Name is "+firstName); //Output First Name is Anitha
console.log("Last Name is "+ lastName); //Output Last Name is Ravindra
console.log("Email is " + email); //Output Email is anitha.r@metricstream.com

//Nested Object Destructuring

const user_nested = {firstName :"Anitha" ,lastName : "Ravindra" , email:"anitha.r@metricstream.com", 
address :{street:"BGRoad" , city:"Bangalore"}};

const {address:{street,city}}=user_nested;

console.log("Street is "+street); // Output Street is BGRoad
console.log("City is "+ city);   // Output City is Bangalore

//Destructuring in Function Parameters

function Userdetails({ firstName, email }) {
    console.log(`${firstName} ${email}`);
  }
  
  // 
  const userobject = { firstName: "Anitha", email: "anitha.r@metricstream.com" };
  Userdetails(userobject); // Output : Anitha anitha.r@metricstream.com: 


