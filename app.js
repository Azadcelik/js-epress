const { readFile } = require('fs')
const os  = require('os')
 

const currentOs = { 
    name : os.type(),
    version: os.version(),
    totalMemories : os.totalmem(),
    freeMemory: os.freemem()
}
