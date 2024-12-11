const reading  = require('fs')


const readinFiles = reading.readFile('./subfolder/test.txt','utf-8',function  (err,data) { 
    if (err) {
        console.log("there is an error occurred")
    }
    else { 
        console.log(data)
    }
    console.log(data)
})



console.log('first task');
setTimeout(function nonBlocking () { 
console.log("second task")
}, 0);
console.log("third task")
/*
console.log('First') is executed first because it's a synchronous operation and goes directly on the call stack.
setTimeout(function callback() { console.log('Second'); }, 0); schedules a callback to run, but it doesn’t execute immediately.
 Instead, it’s registered with the timer API of the browser and is placed in the Task Queue after at least 0 milliseconds.
console.log('Third') is also synchronous and executes immediately after console.log('First').
After the call stack is clear (both First and Third have been logged and their functions have returned),
 the event loop checks the Task Queue, finds the setTimeout callback, and places it on the stack to be executed, thus logging Second.

*/



console.log("number 1")

const newArr = [1,2,3];

newArr.map(function (num) { 
    console.log(num)
})

console.log('number 3')

// setInterval(() => {
//     console.log("this is an asynchronous")
// }, 2000);




const http = require('http');

console.log("first request ")
const server = http.createServer(function (req,res) { 
    console.log("second request ");
    res.end("second request");
})

//this is also asycnhronous 
server.listen(5001, function () { 
    console.log("server is being listened at port 5000")
})