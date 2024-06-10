// let myName = "Mat";
// let num1 = 10;
// let num2 = 12;
// let result = num1 + num2;
// console.log(result);

// let a=6; b=6; c= a+b;
// console.log(c);

// let name = "Olusola"
// name.at(3)
// console.log(name.at(3));


// let latestTrial=`Hello ${name}, thanks for coming`
// console.log(latestTrial);

// let x = 4;
// let y = 2;
// let result2 = x - y;
// console.log(result2);

// x /= 2
// console.log(x);

// let z =20;
// z %= 20
// console.log(z)



// // // false
// // 0 -0 and 0n
// // "", '' (empty strings),
// // null, underfined and Nan


// // // logical operators
// // // && logical and 
// // (5>1 && 5<1) ? console.log('Thanks'): console.log('I dont understand')


// // // || logical or
// // (5>1 || 5<1) ? console.log('Thanks'): console.log('I dont understand')

// // // ! logical not =if the statement is true it will change the statement to false
// // !(5 > 1) ? console.log('Thanks'): console.log('I dont understand') 



// // if statement
// const age = 40;
// // if(age > 30){
// //     alert('Welcome users')
// // } else{
// //     alert('Bad job')
// // }

// // else if statement

// if(age > 10 && age < 20){
//     console.log('I am older than 10');
// } else if(age >= 20){
//     console.log('I am 20years old and more');

// } else if(age >= 30){
//     console.log('I am older than 30');
// }else {
//     console.log('you are not welcome');
// }

// // switch statement
// switch(10){
//     case 0:
//         console.log('a for apple');
//         break;
//     case 1:
//         console.log('b for baby');
//         break;
//     default:
//         console.log('i dont know where i belong');
// }

// // For Loop

// // for(let i= 0; i < 10; i++){
// //     console.log(i);
// // }

// // for(let i=10; i > 0; i--){
// //     console.log(i);
// // }


// // while Loop

// // let i = 10;
// // while(i > 0){
// //     console.log(i);
// //     i--;
// // }

// // dowhile loop
// // let i = 0;
// // do {
// //     console.log('I a coming');
// //     i++
// // } while (i < 0);

// // Array
// const myName1 = ['Wale', ' Amos',' Paul',' Sola']
// console.log(myName1.length);

// for(let i= 0; i < myName1.length; i++){
//     document.write(myName1[i]);
// }

// for(let i= 0; i < myName1.length; i++){
//     console.log(myName1[i]);
// }



// // Function
// // way of wrirting function 1
// function addNumbers(num1, num2) {
//     return num1 + num2
// }
// console.log(addNumbers(4,6));
// console.log(addNumbers(14,60));

// // const fullName = function() {
// //     return 'Adewale'
// // }

// const fullName = () => {
//     return 'Adewale'
// }

// function isEven(anynumber){
//     return(anynumber) % 2 === 0
// }
// console.log(isEven(4))

// function power(base,exponent){
//     let result=base**exponent;
//     return result
// }
// console.log(power(5,2));



// function greet(name) {
//     return "hello" + name
// }
// console.log(greet(" name")); 


// // function glass() {
// //     let nameY = "Hello"
// // }
// // console.log(nameY);

// // Accessing full Array
// const wait =['James', "Moses", "Mercy", "Loret"]
// console.log(wait);

// // To get index
// console.log(wait[3])


// // Array to String
// const fruits = ["Pawpaw", "Apple", "Grape", "Lemon"];
// console.log(fruits.toString())




// // 1. If you start a business with $1000 and the business closes down on a loss of $800, what is the business percentage loss

// // 2. Mark and John invests 200 USD and 100 USD respectively in a business. The business promises to bring an ROI of 30% every month.
// // -- If John compounds his interest every month, how much will he have in ROI and how much will he have in total at the end of 10 months
// // -- If Mark compounds his interest for five months, how much would he have gained.
// // -- Based on your results, who gained more money. Print your answer using an if else statement
// // -- Compound Interest formula = P(1+r)^n - P

// // 3. These are the results of two college students for 3 terms
// // -- Lucy 55 48 57
// // -- Lumy 21 80 41

// // * If the minimum requirement is 60 calculate individual scores base on the average of the three terms
// // * Compare their results and determine who'll repeat the class or move to the next

// // 4. Build a simple todo reminder for Jack who wants to know which color of clothe to wear to work everyday of the week based on his work rules
// // -- Monday -- blue
// // -- Tuesday -- whine
// // -- Wednesday -- black
// // -- Thursday -- Olive Green
// // -- Friday -- Cream

// // question 1
// let perLoss = (800/1000)*100
// console.log("The percentage loss is " + "" + perLoss + "%");

// // question 2
// let totalAmt = 100*(1+0.3)**10;
//  let roi = totalAmt - 100;
//  console.log(`John RIO at the end of ten months is ${roi} and total amount is ${totalAmt}`);

//  let John = totalAmt
//  totalAmt= 200*(1+0.3)**5;
//  roi = totalAmt - 200;
//  console.log(`Mark RIO at the end of five month is ${roi} and the total amount is ${totalAmt}`);

//  let Mark = totalAmt;

// if(John > Mark){
//     console.log("John made more money");
// }else{
//     console.log("Mark Made more money");
// }


// // question 3
// let lucy =(55+48+57)/3;
// let lumy =(21+80+41)/3;
// console.log(`lucy score ${lucy} and lumy ${lumy}`);

// if(lumy >= 60 || lucy >= 60){
//     console.log ("Lumy and Lucy passed");
// }else if(lumy >= 60 && lucy < 60){
//     console.log("lumy passed and lucy failed");
// }else if(lumy < 60 && lucy >= 60){
//     console.log("lumy failed and lucy passed");
// }else{
//     console.log("Lumy and Lucy failed");
// } 

// question 4
// let day = prompt("what day is it");
//     day = day.toUpperCase();
    
// switch (day) {
//     case 'Monday':
//         console.log("blue");
//         break;
//     case 'Tuesday':
//         console.log("whine");
//         break;
//     case 'Wednesday':
//         console.log("black");
//         break;
//     case 'Thursday':
//         console.log("olive green");
//         break;
//     case 'Friday':
//         console.log("cream");
//         break;
//     case 'Saturday':
//         console.log("Relax today is Saturday");
//         break;
//     case 'Sunday':
//         console.log("Relax today is Sunday");
//         break;
//     default:
//         console.log("Please input a valid day");
// };



// Array
// const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]
//  for(let i = 0; i < ages.length; i++){
//      console.log(ages[i] * 2);
//  }
// const newArray = []
//  ages.forEach(function(age, index, best){
//     console.log('age', age);
//     console.log('index', index);
//     console.log(best);
//     let multiplyAge = age * 2
//     newArray.push(multiplyAge)
//  })
//  console.log(newArray)

// Arrow function
//  const arrayFunc = (age, index, best) => 


// Array Filter Function
const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]
// let canDrink = []
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink);


// const canDrink = ages.filter(function(age, index){
//     if(age >= 21){
//         return true;
//     }
// })


// const canDrink1 = ages.filter(function(age, index){
//     if(age >= 40){
//         return true;
//     }
// })
// console.log(canDrink1);

// let canDrink = []
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 40) {
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink);


// Map

// fruits.map(function(fruit, index, array){
//     console.log(fruit);
// })


const numberArray = [1,2,3,4,5,6,7,8,9]

const reduceMethod = numberArray.reduce(function(total,value){
    return total + value ** 2;
})
    console.log(reduceMethod);

              // 1
const numberArray2 = numberArray.filter(function(numb, index){
    if(numb % 2 === 0){
        return true;
    }
})
console.log(numberArray2);

        //  2
const numbers2 = numberArray.map(myFunction);
function myFunction(numb, index, array){
    return numb**2
}
console.log(numbers2);

            // square root
const number3 =numberArray.map(function(numb, index, array){
    return Math.sqrt(numb)
})
console.log(number3)



// object
const newObject = {
    color: "black",
    height: 50,
    weight: 40,
    speak: function(){
        return ('I am a boy')
    }
}
console.log(newObject.speak())
console.log(newObject.color)
console.log(newObject.height)
console.log(newObject.weight)
console.log(newObject['color'])

const newWork = document.querySelector(".project")
// newWork.setAttribute("style", "background: yellow")

// const getElement = document.querySelector('#unknown');
// console.log(getElement.classList);

// getElement.classList.add('saba');
// getElement.classList.toggle('kola')

// const handleClick = () => {
//     bgchange.classList.toggle()
//     bgchange.classList.toggle()
// }


const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const ham = document.querySelector('.ham');
const handleClick = () => {
    container.classList.toggle('nav')
    container.classList.toggle('hide-menu')
    
}
// btn.addEventListener('click',handleClick)





const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

function formValidation(e){
    e.preventDefault();
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === "") {
        const usernameControl = username.parentElement
        const small = usernameControl.querySelector('small')
        usernameControl.classList.add('error')
        small.textContent = 'Username can not be blank'
    }else{
        const usernameControl = username.parentElement
        usernameControl.classList.add('success')
    }

}

// form.addEventListener('submit', formValidation)



fetch('https://pixabay.com/api/videos/?key=44013539-b83118e9bfda0ac4f6e855e9d&q=yellow+flowers')
.then(res => res.json())
.then(data => {
    console.log(data)
    const imgUrl = data.hits[0].userImageURL
    const imageEle = document.querySelector('#image1')
    imageEle.src = imgUrl
})
