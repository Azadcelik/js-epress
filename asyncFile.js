const {writeFile,readFile} = require('fs').promises

const os  = require('os')

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



 

const currentOs = { 
    name : os.type(),
    version: os.version(),
    totalMemories : os.totalmem(),
    freeMemory: os.freemem()
}

const loading = require('lodash')
const { resolve } = require('path')
const newArr = [1,[2,[3,[4,[5,[6]]]]]]

console.log(loading.flatMapDeep(newArr))



const getText = (path) => { 
    return new Promise((resolve,reject) => { 
        readFile(path,'utf-8',(err,data) => { 
            if (err) { 
                reject(err)
            }
            else { 
                resolve(data)
        }
        })
    })
}
// getText('./subfolder/async.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err));


const getAsyncText = async () => { 
    try { 

        const data = await getText('./subfolder/async.txt') //with await once result then give me data 
        const data2 = await getText('./subfolder/myfiles.txt') // here is the magic.No need callback hell,very convenient to read many files at the same time
        console.log(data,data2)
       
        //so promise is useful because we do can chain our operations without nesting   
        //This is often referred to as avoiding "callback hell" or "the pyramid of doom, 
        //"where you have deeply nested callbacks, making the code hard to read and maintain.
        /*
        What It Means Not to Return a Promise
        When a function like fs.readFile does not return a promise, 
        it means that you cannot use .then(), .catch(), or await directly with it. 
        Instead, you need to handle the result with a callback function provided as an argument to readFile.
        */
        

    }catch (error) { 
        console.log(error)
    }

}
getAsyncText();
console.log("hey this is me")



//this method is util method which we can import util object from nodejs and then call promisfy method on it
const util = require('util')
const readFilePromisfy = util.promisify(readFile);
const writeFilePromisfy = util.promisify(writeFile)
async function utilize () { 

    try { 

        const firstReadData = await readFilePromisfy('./subfolder/created-file.txt','utf-8');
        await writeFilePromisfy('./subfolder/different-method.txt','testing my promisfy method with async and await')
        console.log(firstReadData)
    } catch (error) {
        console.log(error)
    }
        

}
utilize()


//last one is gonna be requre.promises which will promise whatever you imported 