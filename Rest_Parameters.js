// Function sumAll with different arguments and return value 

function sumAll(a,b){
    return a+b;
}
let x = sumAll(2,3);

console.log("Sum of two numbers is " + x);

//Rest Parameters with Other Parameters 

function userInfo(firstName,lastName,...hobbies)
{
  
        for(let i=0; i<hobbies.length;i++){
        if (i==0)
        {
        var x=  "Hobbies_" + i + ":" + hobbies[i];
               // console.log(x);
              
        }
        else
        {
            var x= x +  ",Hobbies_" + i + ":" + hobbies[i];
                   // console.log(x);
                    
    
            }          

	}

    var Hobbies ="{" + x + "}";
    var UserTest = {Userfullname :firstName +' ' + lastName,Hobbies};  
    console.log(UserTest);   
    
    //console.log(x);
    
}

userInfo('Anitha',"Ravindra",'Music','Reading','Cooking');

//Output Hobbies: "{Hobbies_0:Music,Hobbies_1:Reading,Hobbies_2:Cooking}" Userfullname : "Anitha Ravindra"