var app = new Vue({
    el: "#app",
    data: {

        customers: [{
            card:12345678,
            name: "Juan Perez",
            password: 1234,
            balance: 250000,
            status: 0,
            },
            {
                card:2234678,
                name: "Juan Perez",
                password: 1234,
                balance: 550000,
                status: 0,
                },
            {
            card:987654321,
            name: "Juan Perez",
            password: 1234,
            balance: 1250000,
            status: 0,
            },
    
        ],

        bank: [
            {
                cien: 50,
                cincuenta: 100,
                veinte: 40,
                diez: 100,
                total: 11800000
                // cien: 0,
                // cincuenta: 2,
                // veinte: 0,
                // diez: 0,
                // total: 100000
            }
        ],
        card:"",
        password: "",
        option:1,
        client: null,
        attempts: 0,
        money: "",



        
    },
    methods: {

        uno(){
            this.card += 1;
            this.password +=1;
            this.money += 1;
        },

        dos(){
            this.card += 2;
            this.password +=2;
            this.money += 2;
        },
        tres(){
            this.card += 3;
            this.password +=3;
            this.money += 3;
        },
        cuatro(){
            this.card += 4;
            this.password +=4;
            this.money += 4;
        },
        cinco(){
            this.card += 5;
            this.password +=5;
            this.money += 5;
        },
        seis(){
            this.card += 6;
            this.password +=6;
            this.money += 6;
        },
        siete(){
            this.card += 7;
            this.password +=7;
            this.money += 7;
        },
        ocho(){
            this.card += 8;
            this.password +=8;
            this.money += 8;
        },
        nueve(){
            this.card += 9;
            this.password +=9;
            this.money += 9;
        },
        cero(){
            this.card += 0;
            this.password +=0;
            this.money += 0;
        },
        correct(){
            this.card = "";
            this.password ="";
            this.money ="";
        },
        cancel(){

            alert("Hasta pronto");
            this.card = "";
            this.password ="";
            this.money = "";
            this.client = null;
            this.option= 1;
            
            
        },
        continue1(){

          switch(this.option){

            case 1:
                this.continue2();
                break;
            case 2:
                this.continue3();
                break;
            case 4:
                console.log("Holaaa");
                this.continue4();
                break;
            
                case 5:
                    console.log("Holaaa");
                    this.continue5();
                    break;
          }
           
               
              
            
          

        },
        
        continue2(){
            if(this.card == ""){
                alert("Enter card number")
                return
            }

            this.customers.forEach(customer => 
            {
                if( this.card == customer.card){
                    this.client = customer;
                    if(this.client.status == 0){
                    this.password="";
                    this.option = 2;
                    }
                    else{
                        alert("Locked card");
                    }
                }
                
            });
            if( this.client == null){
                this.card = ""
                alert("The card is wrong")
            }

            this.card = ""
            this.password = "";
            this.money = ""
           

        },

        continue3(){
            if(this.client.password == this.password){
                 this.option = 3;
                 this.card = ""
                this.password = "";
                this.money = ""
                
                console.log("Welcome");
                
                return
            }
            else{
                this.attempts += 1;
                alert("Incorrect password");
                this.password = ""
            }
            if(this.attempts == 3){
                this.client.status = 1;
                alert("your account has been blocked")
                this.option= 1;
                this.card = ""
                this.password = "";
                this.money = ""
                
            }

            this.card = ""
                this.password = "";
                this.money = ""

        },

        continue4(){
            console.log("Holaaa");
           

            if(this.money == ""){
                alert("Enter the money");
                return
            }
            this.money = parseInt(this.money);
            console.log(this.money);
            
            if(this.money%10000 != 0 || this.money < 10000){
                alert("Enter the money correctly");
                this.money = "";
                return
            }

            if(this.money > this.client.balance){

                alert("Your balance is insufficient");
                this.money = "";
                return

            }

            if(this.money > this.bank[0].total){
                alert(`The withdrawal exceeds the cashier's balance. The cashier can withdraw maximum ${this.bank[0].total}`);
                this.money = "";
                return

            }


            let balance = this.money;
            

            while(balance != 0){

            

            if(balance >= 100000 && this.bank[0].cien != 0){

                balance-= 100000;
                this.bank[0].cien -=1; 
                if( balance == 0) {
                    break;
                    
                }
            }
            if( balance >= 50000 && this.bank[0].cincuenta != 0){

                balance-= 50000;
                this.bank[0].cincuenta -=1; 
                if( balance == 0) {
                    break;
                    
                    
                }
            }

            if( balance >= 20000 && this.bank[0].veinte != 0){

                balance-= 20000;
                this.bank[0].veinte -=1; 
                if( balance == 0) {
                    break;
                    
                    
                }
            }
            if( balance >= 10000 && this.bank[0].diez != 0){

                balance-= 10000;
                this.bank[0].diez -=1; 
                if( balance == 0) {
                    break;
                    
                    
                }
            }
        }

      
        
        this.client.balance -= this.money;
        this.option = 1;

        this.bank[0].total -= this.money;
        let btn = document.getElementById("recibo");
        btn.click();

     
        // this.option = 1;
     



        },

        continue5(){
            if(this.money == ""){
                alert("Enter the money");
                return
            }
            this.money = parseInt(this.money);
            console.log(this.money);
            
            if(this.money%10000 != 0 || this.money < 10000){
                alert("Enter the money correctly");
                this.money = "";
                return
            }

            this.client.balance += this.money;

            let balance = this.money;

            this.option = 1;

            while(balance != 0){

            

                if(balance >= 100000){
    
                    balance-= 100000;
                    this.bank[0].cien +=1; 
                
                }
                if( balance >= 50000){
    
                    balance-= 50000;
                    this.bank[0].cincuenta +=1; 
                    
                }
    
                if( balance >= 20000){
    
                    balance-= 20000;
                    this.bank[0].veinte +=1; 
                   
                }
                if( balance >= 10000 ){
    
                    balance-= 10000;
                    this.bank[0].diez +=1; 
                    
                }
            }
    
           
            let btn = document.getElementById("deposit1");
            btn.click();
    
            this.bank[0].total += this.money;
    
           





        },


        deposit(){
          
            this.money = "";
            this.option= 5;

        },

        withdraw(){

            if(this.bank[0].total == 0){
                alert("There is no balance in the ATM")
                this.option = 1;
                this.money = ""
                return;
            }
            this.money = "";
            this.option = 4;

        },

        close(){
            
            this.card="";
        this.password= "";
        this.client= null;
        this.attempts= 0;
        this.money= "";

        }


        


    },
  });