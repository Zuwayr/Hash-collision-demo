const md5File = require('md5-file')
 
const hashOne = md5File.sync('message1.bin')
const hashTwo = md5File.sync('message2.bin')

console.log(`The MD5 sum of message1.bin is: ${hashOne}`)
console.log(`The MD5 sum of message2.bin is: ${hashTwo}`)

console.log('Default B')
