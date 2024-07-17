// for (let a = 0; a <=10; a++) {

//     console.log(a)

// }

// let sum = 0;
// for (let a = 0; a <= 7; a++) {
//     sum = sum + a;
//     console.log(a)
// }
// console.log(sum);

// let sum = 0;
// let avergae=0;
// for (let a = 0; a <= 5; a++) {
//     sum = sum + a;
//     avergae=sum/a
// }
// console.log(sum);
// console.log(avergae);

// let sum=0;
// let b=0
// for (let a = 0; a <= 5; a++) {
//     b=a*a*a;
//     console.log(b);

//     sum=sum+b;

// }
// console.log(sum);

// for (let a= 0; a <=10; a++) {
//     console.log("15 *",a,"=",a*15);
// }

// for (let a = 0; a <=8; a++) {
//     for (let b = 0; b <=10; b++) {
//       console.log(a*b);
//     }

// }

// let sum=0;
// let b=0;
// for (let a = 0; a<=9; a++) {
//     b=2*a+1;
//     console.log(b);
//     sum=sum+b;

// }
// console.log(sum);

// for (let a =0; a<=5;a++) {
//     for (let b = 0; b <=4; a++) {
//         console.log(a*b);
//     }

// }
// let c=0;
// for (let a = 5; a >=1; a--) {
//     let c = "";
//     for (let b = 1; b <=a; ++b) {
//         c +="*";
//     }

//     console.log(c);
// }

// function check(n){

//   for (let a = n; a >= 1; a--) {
//     let c = "";
  
//     for (let b = 1; b <a ; b++) {
//       c += " ";
//     }
//     for (let k= 1; k <=a ; k++) {
//       c += "*";
      
//     }
//   console.log(c);
  
//   }
  
// }
// check(5);

// function check(n){

//   for (let a = 0; a <= n; a++) {
//     let c = "";
  
//     for (let b = 0; b <= n-a ; b++) {
//       c += " ";
//     }
//     for (let k= 0; k <a ; k++) {
//       c += "*";
      
//     }
//   console.log(c);
  
//   }
  
// }
// check(5);

function check(n){
  let c=0;
  for (let a = 1; a <= n; a++) {
    let c = "";
    for (let b = n; b >= a; b--) {
      c += " ";
    }
    for (let k= 1; k <=a; k++) {
      c += "* ";
    }
    console.log(c);
  }
}

check(5);