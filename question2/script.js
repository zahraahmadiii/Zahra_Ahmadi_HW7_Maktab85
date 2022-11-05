// function sortingArray(arr1,arr2){

//     newarr1=arr1.concat(arr2);
//     newarr2=newarr1.sort((a,b)=> b-a)
//     console.log(newarr2);
//     result=newarr2.toString()
//     console.log(result);

// }

// sortingArray([5,1,7],[3,2,8]);

// //////////////////////////////////////////

function sortingArray(...arrays){

   const mergearr=[ ...arrays]
   console.log(mergearr);
   let arr1=[]
   let arr2=[]
   let arr3=[]
   arr2=arr1.concat(...arrays)
   console.log(arr2);
   arr3=arr2.sort((a,b)=> b-a)
   console.log(arr3);
   result=arr3.toString();
   console.log(result);
 
}

sortingArray([5,2,7],[3,1,8]);
sortingArray([5,2,7],[3,1,8],[9,10,11],[20,23,56]);
sortingArray([5,2,7],[3,1,8],[9,10,11,17])
