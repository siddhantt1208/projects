let num=13
let sum=0
   for(let i=0; i<=num; i++){
       if(num%i==0){
           sum=sum+1
       }
       if(sum==2){
           console.log("Yes")
       }
       else{
           console.log("No")
       }
   }