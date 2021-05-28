class customer {
    public name :string = "";
    public address : string ="";
    public mobile: string = "";

    public constructor(Name:string,Adress:string,Mobile:string)
    {
        this.name=Name;
        this.address=Adress;
        this.mobile= Mobile;
    }

   public display()
   {
       console.log("name:",this.name);
       console.log("address:"+this.address);
       console.log("mobile"+this.mobile);
   }
}

class customerMain
{
    constructor()
    {
         let data = prompt("Enter the details");
         let dataarray = data?.split(',');
          if(dataarray != null)
          {
           let obj  = new customer(dataarray[0],dataarray[1],dataarray[2]);
           obj.display();
          }
          

    }
}

let obj = new customerMain();