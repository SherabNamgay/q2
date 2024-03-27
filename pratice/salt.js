const crypto = require('crypto')

let password="impema"
const salt =crypto.randomBytes(16).toString('hex')
console.log(`salt is= ${salt}`)
const hash = crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex')
console.log(`hash_password= ${hash}`)