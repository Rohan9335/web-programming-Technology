
        class practice
        {
            #_month
            constructor(){
                this.#_month = 1
            }

            get month(){
               // console.log(this.#_month)
               return this.#_month
            }
            set month(m){
                if(m >= 1 && m <=12){
                    this.#_month = m
                }
                else{
                    console.log("enter valid month")
                }
            }
        }
        let obj = new practice()

       // obj.month(2)
        console.log(obj.month)
