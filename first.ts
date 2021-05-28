class Employee
{
   //field
   name:string;
   address:string;
   mobile:string;

   //constructor
   constructor(name:string, address:string,mobile:string) { 
      this.name = name
      this.address = address
      this.mobile = mobile
   }  
   /*constructor(address:string) { 
      this.address = address
   } 
   constructor(mobile:string) { 
      this.mobile = mobile
   } */

   //function 
   disp():void { 
      //var userInput = prompt('Please enter your name.');
      console.log("Name:"+this.name) 
      console.log("Address:"+this.address)
      console.log("Mobile:"+this.mobile)
   } }

var obj = new Employee("Lee","Hyderabad","12345");
//console.log("Reading attribute value Engine as :  "+obj.name)  

//access the function
obj.disp()