// // const readingFile = require('fs');

// // for (let i = 0; i < 1000; i++) { 
// //     readingFile.writeFileSync('./subfolder/big.txt',`this is my 1000k file ${i}\n `, {flag: 'a'} )
// // }


// // const { createReadStream } =  require('fs');
// // const stream = createReadStream('./subfolder/big.txt',{highWaterMark: 9000,encoding: 'utf-8'});
// // stream.on('data',(chunk) => console.log(chunk));

// // stream.on('error',(err) => console.log(err))

// const http = require('http');
// const fs = require('fs');


// http.createServer(function (req,res) { 
//     //without chunk if you check network you will see the number of size 
//     // const text = fs.readFileSync('./subfolder/big.txt','utf-8');
//     // res.end(text);

//     // with stream when you check size you would only see chunked 
//     const fileStream = fs.createReadStream('./subfolder/big.txt','utf-8')

//     fileStream.on('open', () => { 
//         fileStream.pipe(res);
//     })

//     fileStream.on('error',(err) => {
//         res.end(err)
//     })
// }).listen(5005)

// console.log(require.cache)


const http = require('http');



const server = http.createServer((req,res) => { 


})


