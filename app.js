const { readFile } = require('fs')
const os  = require('os')
 

const currentOs = { 
    name : os.type(),
    version: os.version(),
    totalMemories : os.totalmem(),
    freeMemory: os.freemem()
}

const loading = require('lodash')
const newArr = [1,[2,[3,[4,[5,[6]]]]]]

console.log(loading.flatMapDeep(newArr))