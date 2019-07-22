  function anuarithe(){
    var array=document.getElementById("dei").value;
    var arr= array.split("-");
    var Men=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var women=["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"];
    console.log("month:", array);
    var month=parseInt(arr[0]);
    var day=parseInt(arr[1]);
    var year=parseInt(arr[2]);
    console.log("year: " +"month: " +"day");
   if(year<=0){
     alert("no century");
   }
    //  else if(year <= 100){
    //    alert("first century");
    //  }
          else if(year % 100 == 0){
          var  good =year/100;
         } 
          else{
            good =year/100+1;
          var dayOfWeek=(( ( (good/4) -2*good -1) + (5*year/4) + (26*(month+1)/10) + day) % 7) ;
             var bornDay= Math.round(dayOfWeek);
             console.log(bornDay);
            if(document.getElementById("male").checked){
               alert(Men[bornDay]);
             }
            else if(document.getElementById("female").checked){
             alert(women[bornDay]);
              }
             else{
             console.log("none");
               }
             }
           }

     
//     console.log(gender)
    
//   if (gender==="famle"&&bornDay==="0"){
//     console.log(women[0]);
//   }else{
// console.log(Men[0]);
//   } if (gender==="famle"&&bornDay==="1"){
//     console.log(women[1]);
//   }else{
// console.log(Men[1]);
//   }
//   if (gender==="famle"&&bornDay==="2"){
//     console.log(women[2]);
//   }else{
// console.log(Men[2]);
//   }
//   if (gender==="famle"&&bornDay==="3"){
//     console.log(women[3]);
//   }else{
// console.log(Men[3]);
//   }
//   if (gender==="famle"&&bornDay==="4"){
//     console.log(women[4]);
//   }else{
// console.log(Men[4]);
//   } if (gender==="famle"&&bornDay==="5"){
//     console.log(women[5]);
//   }else{
// console.log(Men[5]);
//   }
//   if (gender==="famle"&&bornDay==="6"){
//     console.log(women[6]);
//   }else{
// console.log(Men[6]);
//   }
// {
// }