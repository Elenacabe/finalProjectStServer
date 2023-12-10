const express = require('express')
const router = express.Router()
const { newStory, getAllStories, getStoryDetails, mostInteractedStories, getAllMyStories, deleteStory, valorateStory, showValoration, betterRatedStories } = require('../controllers/stories.controller')

router.post('/newStory', newStory)

router.get('/getAllStories', getAllStories)

router.get('/allMyStories/:userId', getAllMyStories)

router.get('/getInteractedStories', mostInteractedStories)

router.get('/getBetterRatedStories', betterRatedStories)

router.get('/details/:storyId', getStoryDetails)

router.put('/valorate/:story_id', valorateStory)

router.get('/showValoration/:story_id', showValoration)

router.post('/deleteStory/:story_id', deleteStory)

module.exports = router
