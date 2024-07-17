// let key = 1;
// switch (key) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("thuesday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("sturday");
//     break;
//   case 6:
//     console.log("sunday");
//     break;

//   default:
//     console.log("Kuch nahi...!");
//     break;
// }

// function check(month,years){
//     let days;

// switch (month) {
//   case 1:
//     days=31;

//     break;
//   case 2:
//     days=31;
//     break;
//   case 3:
//     days=31;
//     break;
//   case 4:
//     days=31;
//     break;
//   case 5:
//     days=31;
//     break;
//   case 6:
//     days=31;
//     break;
//   case 7:
//     days=31;
//     break;
//     case 8:
//         days=31;
//     break;
//     case 9:
//         days=31;

//     break;
//     case 10:
//         days=31;
//     break;
//     case 11:
//         days=31;
//     break;
//     case 12:
//         days=31;
//     break;

//   default:

//     break;
// }
// return days;
// };
// const month=3;
// const years=2024;
// console.log(`total days in month ${month} of years ${years}: ${(month,years)}`);

// function check(n){

//   switch (n) {
//     case "a":console.log("a is vowel");

//       break;
//       case "e":console.log("e is vowel");

//       break;
//       case "i":console.log("i is vowel");

//       break;
//       case "o":console.log("o is vowel");

//       break;
//       case "u":console.log("u is vowel");

//       break;

//     default:
//       console.log("b,c,d,f,g,h,l,m,n,p,q,r,s,t,v,w,x,y,z these is a consonants words");
//       break;
//   }
// }
// check("b");
// oddeven
// function check(n ) {
//   switch (n%2) {
//     case 0:
//       console.log(`${n}is even`);

//       break;

//       case 1:
//       console.log(`${n}is odd`);

//       break;

//     default:
//       console.log("invalid");
//       break;
//   }

// }
//  check(88);

// positive,negative

// function check(n) {
//   switch (true) {
//     case n > 0:
//       console.log(`${n} positive`);

//       break;
//     case n < 0:
//       console.log(`${n} negative`);

//       break;
//     case n ===0:
//       console.log(`${n} zero`);

//       break;

//     default:
//       console.log(invalid);
//       break;
//   }
// }
// check(0);

function check(num1,num2) {
  let result ;
  switch (true) {
    case num1 > num2:
     ;
      result=num1;
      
      break;
      case num2 > num1:
        result=num2;
        
        break;
  
    default:
      result="number are equal"
      break;
  }
  return result;
}

const number1 =15;
const number2=15;
const maxnumber=check(number1,number2);
console.log(`maximun number between ${number1} and ${number2} is: ${maxnumber}`);