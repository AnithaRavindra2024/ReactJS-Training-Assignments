//Javascript Object Creation

var studentProfile={
    fName: 'Anitha',
    lName :'Ravindra',
    class:{classname :'10A',subject:'English',teacher:'Indira',email:'indira@test.com'},
    grades:{Grade1 : 'A',Grade2:'B',Gradec:'C'}
};


let {fName :StudentName ,lName , class:{classname,subject,teacher,email}} =studentProfile ;

console.log(StudentName);
console.log(lName);
console.log(classname +' '+subject +' '+teacher +' '+email);

//output Anitha  Ravindra  10A English Indira indira@test.com 

