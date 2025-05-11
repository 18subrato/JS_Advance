const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 4000);
// }).then(function(){
//     console.log("Promise 2 consumed");
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Subrato",age:22,city:"New Delhi"})
//     }, 1000);    
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let data = true
//         if(data){
//             resolve({username:"Subrato",age:22,city:"New Delhi"})
//         } else {
//             reject("ERROR : Something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
// })
// .catch((err)=>{
//     console.log(err);
// })



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let data = true
//         if(!data){
//             resolve({username:"Subrato",age:22,city:"New Delhi"})
//         } else {
//             reject("ERROR : Something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log("hello",username);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Finalyy done");
// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let data = true
//         if(data){
//             resolve(JSON.stringify({username:"Subrato",age:22,city:"New Delhi"}))
//         } else {
//             reject("ERROR : Something went wrong")
//         }
//     },1000)
// })

// const hello = async () => {
//     try {
//         let response = await promiseFive;
//         const data = await JSON.parse(response)
//         console.log(data);                                             
//     } catch (error) {
//         console.log("Wrong by promise",error);
//     }
// }
// hello()


// async function promiseConsume(){
//     try {
//         let res = await promiseFive
//         console.log(JSON.parse(res));
//     } catch (error) {
//         console.log(error)
//     }
// }

// promiseConsume()


// async function getUserData(){
//    try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json();
//         console.log(data)
//    } catch (error) {
//         console.log(error)
//    }
// }

// getUserData()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((res)=>{
//     const data = res.json();
//     return data;
// })
// .then(()=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error);
// })