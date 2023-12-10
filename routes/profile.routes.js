const express = require('express')
const router = express.Router()
const { getAllUsers, getDetailsProfile, editProfileHandler, deleteProfile } = require('../controllers/profile.controller')


router.get('/getAll', getAllUsers)

router.get('/getDetailsProfile/:_id', getDetailsProfile)

router.put('/edit/:_id', editProfileHandler)

router.post('/delete/:_id', deleteProfile)



module.exports = router