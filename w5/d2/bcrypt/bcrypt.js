// To install bcryptjs, run npm install bcryptjs

const bcrypt = require('bcryptjs')

const password = 'iAmAV3ryS3curEP@ssw0rd'

const salt = 10

const generatedSalt = bcrypt.genSaltSync(salt)
console.log(generatedSalt)

const result = bcrypt.hashSync(password, generatedSalt)
console.log(result)
const hashed = '$2a$10$C.hNJL9B2.TkpKPzlDNjCOR8dJwyUNRnVk7WTvOhBT2VQ5XlHjh.u'
console.log(hashed)
async function comparePassword() {
  const isItTheSame = await bcrypt.compare(password, hashed)
  const isItTheSame2 = await bcrypt.compare(password, result)
  console.log(isItTheSame, isItTheSame2)
}
comparePassword()
