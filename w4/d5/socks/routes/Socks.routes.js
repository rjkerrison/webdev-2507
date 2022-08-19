const { Router } = require('express')

const router = new Router()

// GET /socks
router.get('/', (req, res) => {
  res.json({ message: 'SOCKS' })
})

// export router so we can import it elsewhere
module.exports = router
