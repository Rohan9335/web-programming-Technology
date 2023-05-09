
            function main(message){

                let arr=["rohan","nikesh","jotiraj"];

                    for(let i=0; i<arr.length; i++){

                        console.log(message(), arr[i])
                    }
            }
            function ind(){
                return "namaste"
            }
            main(ind)

            main(function pak(){
                return "bomb"
            })

            let j= function japan(){
                return "konnichiva"
            }
            main(j)
