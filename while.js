// let i = 10;
// while (i) {
//     console.log(i);
//     i--;
// }
// let i=1;
// while (i <=10 ) {
//     console.log(i);
//    i++;
    
//  }
// function print() {
//     let start ='a'.charCodeAt(0);
//     let end ='z'.charCodeAt(0);
//     let curentChatCode= start;

//     while (curentChatCode <=end) {
//         let curentChat= String.fromCharCode(curentChatCode);
//         console.log(curentChat);
//         curentChatCode++;
        
//     }
// }
// print()

// even number

// function check() {
//     let num=1;
    
//     while (num <=100) {

//        if (num %2===0){
//         console.log(num);
//        }
//         num++;
//     }

//     function check(n){
//         n=Math.abs(n);
//         let count=0
//         if (n===0) {
//             return1;
            
//         }
//         while (n>0) {
//             n=Math.floor(n/10);
//             count++;
            
//         }

//     }
//    let num=-12345;
//    console.log("number "+num+"is"+check(num));
// }
// check ();


// odd number

// function check() {
//     let num=0;
    
//     while (num <=100) {
        
//        if (num %2 !==0){
//         console.log(num);
//        }
//         num++;
//     }

    
// }
// check ();

// nuture number add

// function check() {
//     let num=0;
//     let b=0;
    
//     while (num <=100) {
        
//        if (num ){
//         console.log(num);
//        }
//         num++;
//         b=b+num;
//     }

//     console.log(b);
// }
// check ();

// even number add
// function check() {
//     let num=1;
//     let b=0;
    
//     while (num <=100) {
        
//        if (num %2===0 ){
//         console.log(num);
//         b=b+num;
//        }
//         num++; 
       
//     }

//     console.log(b);
// }
// check ();

// odd numberadd

// function check() {
//     let num=1;
//     let b=0;
    
//     while (num <=100) {
        
//        if (num %2!==0 ){
//         console.log(num);
//         b=b+num;
//        }
//         num++;
       
//     }

//     console.log(b);
// }
// check ();


// function check(n) {
//     n=Math.abs(n);
//     let lastdigit=n/10;
//     let first=n;
//     first=Math.floor(first/10);
//     while (first>=10) {
//         first=Math.floor(first/10);
        
//     }
//     return{first,lastdigit};
// }
// let num=-12345;
// let result=check(num);
// console.log("first"+num+"is"+result.first);
// console.log("last"+num+"is"+result.lastdigit);

// i=1;
// while (i<=5) {
//     i++;
//     console.log(i);
     

// }

// i=0;
// while (i<26) {
//     i=i+3
//     console.log(i);
    
// }


a=[1,2,3,4];
b=a;
b[a]=26;
console.log(b);
// let i = 5;
// do {
//     console.log(i);
//     i--;
// } while (i);