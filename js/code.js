// -----Call back function---------

// -----Reduce method--------------

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((a,b) => {
//     return a + b;
// })
// console.log(`Sum: ${sum}`);

// let double = numbers.map((item) => {
//     return item * 2;
// })
// console.log("Current array: ", numbers);
// console.log("Double: ", double);

// for (let numb of numbers) {
//     console.log(numb);
// }

// let people = [ 
//     {
//        id: 1,
//        firstName: 'James',
//        surName: 'Henk'
//     },
//     {
//        id: 2,
//        firstName: 'Puleng',
//        surName: 'Manawi'
//     },

// ];

// console.table(people);

// let peopleFirstNames = people.map((item) => {
//     return item.firstName
// })

// console.log(peopleFirstNames);

// ------Hoisting-----------
// It is the ability to move calling functions above the setting of functions.

// function addition(...args) {
    // let sum = args.reduce((a, b) => {
    //     return  a + b;
    // })
//     console.log(args);
// }

// addition(5, 8, 3, 7);

// -------Rest Operator----------

// function addition(...args) {
//     let sum = args.filter(Number).reduce((a, b) => {
//         return a + b;
//     })

//     console.log("Sum: ", sum);
// }

// addition(3, 'keenan', 8, 10);

// -------Fetch API--------

// fetch('../data/data.json')
// .then((res)=>{
//     return res.json();
// })

// .then((data)=>{
//     console.table(data.results);
// })

// ------Asynchronous-----

// async function fetchData() {
//     let data = await fetch ('')
// }

fetch('https://api.chucknorris.io/jokes/random')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    let tbody = document.querySelector('tbody');
    Object.keys(data).forEach( (item)=>{
        if(data[item].length){
            console.log(`${item}: ${data[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${item}</td>
                    <td>${data[item]}</td>
                </tr>
            `
        }
    } )
})



