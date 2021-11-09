
// Finding whether it is a prime number
// console.log("Finding whether it is a prime number")
// function findprime(...numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         let number = numbers[i]
//         let bolen = 0
//         for (let j = 2; j < number; j++) {
//             if (number%j==0) {
//                 bolen = bolen+1
//             }
            
//         }
//         if (bolen>0) {
//             console.log("This number is not prime")
//         }
//         else{
//             console.log("This number is prime")
//         }
//     }
// }
// findprime(101,102)

// console.log("Checking for friend numbers")
// function isFriednlyNumber(number1,number2) {
//     let sumNumber1 = 0
//     let sumNumber2 = 0
//     for (let i = 1; i <number1; i++) {
//         if (number1%i == 0) {
//             sumNumber1+= i
//         }
        
//     }
//     for (let j = 1; j < number2; j++) {
//         if (number2%j == 0) {
//             sumNumber2+= j
//         }
        
//     }
//     if (sumNumber1==number2 && sumNumber2 == number1) {
//         console.log(number1 + " and " + number2 + " are friendly numbers")
//     }else{
//         console.log(number1 + " and " + number2 + " are not friendly numbers")
//     }
// }
// isFriednlyNumber(220,284)


// function perfectNumber() {
//     for (let i = 0; i < 952645554895528852586988; i++) {
//         let toplam = 0
//         for (let j = 0; j <= i; j++) {
//             if (i%j==0) {
//                 toplam = toplam + j
//             }
            
//         }
//         if (2*i == toplam) {
//             console.log(i + " is perfect number")
//         }
        
//     }

// }
// perfectNumber()

function isPrime() {
    for (let i = 2; i < 1000; i++) {
        let bolen = 0
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
                bolen = bolen +1
            }
            
        }
        if (bolen == 0) {
            console.log(i + "is prime number")
        }
        
    }
}
isPrime()