const {writeFile,readFile} = require('fs').promises

//this is old way callback function 
const data = readFile('./subfolder/myfiles.txt','utf-8',(err,data) => { 
    if (err) { 
        console.log('there is no data readed there')
    }
    console.log(`this is my data for asyncronous ${data}`)
})



async function readFiles () { 
 
    try 
    { 

        const data = await readFile('./subfolder/created-file.txt','utf-8')
        console.log(data)
    }
    catch(error) { 
        console.log(error)
    }
}

readFiles()




//callback hell

console.log('start')

readFile('./subfolder/myfiles.txt','utf-8',(err,data)=> { 
    if (err) {
        console.log(err) 
        return
    }
    const firstData = data
    readFile('./subfolder/created-file.txt','utf-8',(err,data) => {
        if (err) {
            console.log(err)
            return
        }
        const secondData = data;

    writeFile('./subfolder/async.txt',`${firstData} ${secondData}`,(err,data) => { 
        if (err) {
            console.log(err)
            return
        }


    })
   
})
})


console.log('done and passed to next task')

