// let salaries={
//     "John":100,
//     "Pete":300,
//     "Mary":250,
//     topSalary(){

//     let array1=[]
//     let array2=[]

//     Object.entries(salaries).forEach(([key,value]) =>{
        
//         array1.push(value);
      
//         array2=array1.sort((a,b)=>{
//             if(a>b){
//                 return -1;
//             }else if(b>a){
//                 return 1
//             }
//             console.log(array2);
//         })
//         console.log(this.keys(salaries).find(key => object[key] === value) ); 
       
//     })
  
 
       
//     }
// };
  

// salaries.topSalary()

// //////////////////////////////////////////

let salaries={
  "John":100,
  "Pete":300,
  "Mary":250,
}

function topSalary(allsalaries) {

    let highSalary = 0;
    let highSalaryName=null;
  
    for(let [firstname, salary] of Object.entries(allsalaries)) {
      if (salary > highSalary) {
        highSalary = salary;
        highSalaryName = firstname;
      }
    }

  
    return  highSalaryName ;
  }

  console.log(topSalary(salaries));

 