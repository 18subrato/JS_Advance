// function hello(){
//     setTimeout(()=>{
//         console.log("1")
//         setTimeout(()=>{
//             console.log("2")
//             setTimeout(()=>{
//                 console.log("3");
//                 setTimeout(()=>{
//                     console.log("4");
//                         setTimeout(()=>{
//                             console.log("5");
//                                 setTimeout(()=>{
//                                     console.log("6")
//                                 },1000)
//                         },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }

// hello()



// -----------------------------------------------------------------------------------------------------


// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("step 1")
//         resolve()
//     },1000)
// })
// .then(()=>{
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("step 2")
//             resolve()
//         },2000)
//    })
// })
// .then(()=>{
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("step-3")
//             resolve()
//         },3000)
//     })
// })
// .then(()=>{
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("step-4")
//             resolve()
//         },1000)
//     })
// })
// .then(()=>{
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('step-5')
//             resolve();
//         },1000)
//     })
// })
// .then(()=>{
//     console.log('step-6');
// })

//------------------------------------------------------------------------------------------------

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('step 1')
//     },2000)
// })
// .then((data)=>{
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log(data)
//             resolve('step 2')
//         },2000)
//     })
// })
// .then((data)=>{
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log(data)
//             resolve('step 3')
//         },2000)
//     })
// })
// .then((data)=>{
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log(data)
//             resolve('step 4')
//         },2000)
//     })
// })
// .then((data)=>{
//     setTimeout(()=>{
//         console.log(data)
//     },2000)
// })

function taskUpdate(task,time){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log(task)
            resolve()
        },time)
    })
}

taskUpdate("Step-1 : Call dominos",1000)
.then(()=>{
    return taskUpdate("Step-2 : order process",1000)
})
.then(()=>{
    return taskUpdate("Step-3 : Start preparing",1000)
})
.then(()=>{
    return taskUpdate("Step-4 : start cooking",1000)
})
.then(()=>{
    return taskUpdate("Step-5 : cooking done",4000)
})
.then(()=>{
    return taskUpdate("Step-6 : order out for delivery",3000)
})
.then(()=>{
    return taskUpdate("Step-7 : order done",1000)
})
.catch((err)=>{
    console.log(err)
})
