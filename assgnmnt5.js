//  Q 1 :-

function find_prod(num,arr)
{ 
    var pro=1; 
    for(let i=0;i<num;i++)
    {
        pro*=arr[i];
    }
    return pro;

}
const arr=[1,2,3];
console.log("product =" ,find_prod(arr.length,arr));


// Q 2 :-

function find_sum(num,newarr)
{
    let sum=0;
    for(let i=0;i<num;i++)

    {
        sum +=newarr[i];
    }
    return sum;
}
const arry=[5,3,2,6,2];
console.log("Sum =" ,find_sum(arry.length,arry));


// Q 3 :-

function contNum(arr,num){
    let count = 0;
   for(let i =0;i<arr.length;i++){
       if(num == arr[i]){
           count++;
       }
   }
   return count++;
     }
   const array = [3,3,2,1,2,2,1]
   let num =2
   console.log("Repeated times=" ,contNum(array,num));  


// Q 4 :-

function findEvenOdd(A){
    let sumEven =0;
    let sumOdd=0;
    for(let i = 0; i<A.length;i++){
        if(A[i]%2==0){
            sumEven+=A[i];
        }
    else{
        sumOdd+=A[i];
    }
    }
    return [sumEven, sumOdd];
 }
 let A = [1, 2, 3, 4 ,5 ,6];
 console.log( "Sum of even and odd number = ", findEvenOdd(A));


// Q 5 :-

function findNumber(newArray, number) {
    
    for (let i = 0; i < newArray.length; i++) {
       if (newArray[i] === number) {
         return true;
       }
    }
    return false;
   }

   const array1 = [1, 2, 3, 4, 5];

   const number = 3;
   const isFound = findNumber(array1, number);
   
   if (isFound) {
    console.log(`Number ${number} is present in the array.`);
   } else {
    console.log(`Number ${number} is not present in the array.`);
   }

// Q 6 :-

function highAge(G) {
    let years = [];
     
    for(let i = 0; i < G.length; i++) {
       if(G[i] > 18) {
        years.push(G[i]);
       }
    }
     
    return years;
   }
let G = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,];
let totalAge = highAge(G);
console.log(totalAge);


// Q 7 :-

function inc_Array(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        arr[i]+=1;
    }
   return arr;
}

const arr1=[1,2,3,4,5,6];
console.log(inc_Array(arr1));

// Q 8 :-

function studentsPass(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 3232) {
            return "NO";
        }
    }
    return "YES";
}
console.log(studentsPass([3232, 3233, 3234, 3235])); // Output: YES
console.log(studentsPass([3231, 3232, 3233, 3234])); // Output: NO


// Q 9 :-

function countUniqueColors(shirts) {
    const colors = {};
   
    for (let i = 0; i < shirts.length; i++) {
       const color = shirts[i];
   
       if (colors[color]) {
         colors[color]++;
       }
       else {
         colors[color] = 1;
       }
    }
    let uniqueColors = 0;
    for (let color in colors) {
       if (colors[color] === 1) {
         uniqueColors++;
       }
    }
   
    return uniqueColors;
   }
   
   const shirts = ["red", "blue","pink", "green"];
   console.log("Number of unique color shirts = " , countUniqueColors(shirts));


// Q 10 :-

function findMinMax(numbers) {

    if (numbers.length === 0) {
       return 'Error: No elements in the array.';
    }

    var min = Math.min(...numbers);
    var max = Math.max(...numbers);
   
    return { min, max };
   }
   
   var numbers = [4, 9, 1, 5, 8, 3, 2, 6];
   console.log(findMinMax(numbers));

