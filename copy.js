 const mustang = {
    carBrand:"FORD",
    model:"mustang",
    engine:3.8,
    transmission:"automatic ",
    modelEears:2004,

 }

 const copyMusnatg = copyObj(mustang)


 copyMusnatg.carBrand = "FORD",
 copyMusnatg.model ="raptor",
 copyMusnatg.engine = "5.0",
 copyMusnatg.transmission ="robot",
 copyMusnatg.modelEears = 2019,
 
 console.log(mustang)
 console.log(copyMusnatg)

 function copyObj(mainObject){
 const mainObjcopy = {}
 for(i in mainObject){
    mainObjcopy[i] = mainObject[i]
 }
return mainObjcopy
}


const ufc = {
person:"Fedor Emelianenko",
person1:"Mirko Cro Cop",
person2:"Bob Sapp",
}

const mma ={
   person3:"Anderson Silva",
   person4: "Kimbo Slice",
   person5:"Brock Lesnar"
}

const a = copyObj(mma)


 const copyMma = Object.assign({},mma) 
 console.log(copyMma)

  const arr = [54454554,254545,54545465,4,5,6,7,8,9,]
  const y = copyArr(arr);
  y [3] = 15

   console.log(arr)
 
function copyArr(n){
   const copy = []
   for(i in n){
   copy[i] = n[i]
   }
   return copy
 };

 const arrCopy = [...arr]
 console.log(arrCopy)

 const copyCar ={...mustang}
 console.log(mustang)



const arr1 = [10,20,30,40,50]
const arr2 = [10,20,30,40,50]

//------------------------------------------------------------------------------------------
const arr5 = [5,8,9]


  
function myForEach(arr,funct){


    for(i = 0; i < arr.length; i++){
       funct(arr[i],i,arr)
    }
}
myForEach(arr5,function(item,index,arr){
    console.log(`${index} -- ${item * 2} `  )
})
 





 



 


 
  
  
 
 