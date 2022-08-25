const router = require('express').Router()

// router.get('/', (req, res, next) => {
//   res.sendFile('index')

//   // console.log(__dirname)
//   // const file = `${__dirname.replace('routes', 'public')}/index.html`
//   // res.sendFile(file)
// })

router.use('/characters', require('./characters.route'))

module.exports = router
