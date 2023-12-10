const router = require("express").Router()
const { signUp, logIn } = require("../controllers/auth.controllers")
const { verifyToken } = require("../middlewares/verifyToken")

router.post('/signup', signUp)

router.post('/login', logIn)

router.get('/verify', verifyToken, (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })
})



module.exports = router