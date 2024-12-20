// const readingFile = require('fs');

// for (let i = 0; i < 1000; i++) { 
//     readingFile.writeFileSync('./subfolder/myFile',`this is my 1000k file ${i}\n `, {flag: 'a'} )
// }

const EventEmitter = require('events');

// console.log(EventEmitter)

const customerEmitter = new EventEmitter();

customerEmitter.on('response',(name,age) => { 
    console.log(`data recieved ${name} with age of ${age}`)
})

customerEmitter.on('response',(name) => { 
    console.log(`some other logic mr ${name}`)
})
customerEmitter.emit('response','azad',33)