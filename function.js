// function f1(a,b){
//     console.log("addition = ",a+b)
// }

// // f1()
// // let x=f1
// // console.log("type of x =", typeof(x))

// // x(10,30)
// let x=f1(1,3)

            function domath(choice){

                function dosqr(x){
                    return x*x
                }

                function dopower(a,b){
                    let p = math.pow(a,b)
                    return p

                    
                }
                if(choice==1)
                    return dosqr
                else
                {
                    return dopower
                }    
                
                // console.log(dosqr(9))

            }

            let v= domath(1)
            console.log("typeof v=",typeof(v))
            console.log("calling from v ", v(10))
            let ch=domath(12)
            console.log("typeof ch=",typeof(ch))
            console.log("calling from ch ", ch(10))



    
        
    // dosqr(4)    // we cant call nested function outside the outer function

