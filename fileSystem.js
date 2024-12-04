const fileVar = require('fs')
//object destructiong 
const {readFileSync,writeFileSync} = require('fs')

const myText = fileVar.readFileSync("./subfolder/myfiles.txt",'utf-8')

console.log(myText)
//If you add object with flag property and ‘a’ value then it will append whatever you are adding to your text with write file.
//otherwise it will overwrite it
writeFileSync('./subfolder/created-file.txt',`${myText}`
)

console.log(require)