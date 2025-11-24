
//Question1. Check whether a character is a vowel or consonant.
 let char ='d';
if(char =='a' || char =='i'|| char =='o'|| char =='u'|| char =='e'){
    console.log(char + " is a vowel")
}else{
    console.log(char +" is a constant")
}






// Question 2. Find the sum of first N natural numbers
let n =parseInt(prompt("Enter value of N:"));
let sum = 0;
for(let i=1; i <=n;i++) {
    sum += i;
}
console.log("sum of frist" +n+"Natural no.=" +sum);



//   Question3.  Print the elements of an  array using a for loop.

let i = 7;

for (let i = 0; i <= 10; i++) {
  console.log( "value=" ,i)
}





     //Question4. Create an object student with properties: name, age, roll no and grade. Console the value of Object using 'for in' loop . 

     let student = {
        Name:"kamalbhaskar",
        Age:19,
        Roll_no:25215,
        Grade: "A"
     };
     for(let key in student) {
        console.log(key +'='+student[key]);
     }



     // Question5. Get User to input a number using promt ("Enter a Number"). Check if the number is multiple of 5 or not.
 let num = parseInt(prompt("Enter a number:"));
 if(num%5 === 0){
    console.log(num+ "is a multiple of 5");
}
    else{
        console.log(num+ "is not a multiple of 5");

 }


