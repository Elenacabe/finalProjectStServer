const User = require('../models/User.model')
const Story = require('../models/Story.model')
const Comment = require('../models/Comment.model')
const jwt = require('jsonwebtoken')

const getAllUsers = (req, res, next) => {
    User
        .find()
        .then(users => res.json(users))
        .catch((err) => next(err))

}

const getDetailsProfile = (req, res, next) => {
    const { _id } = req.params

    User
        .findById(_id)
        .then(user => res.json(user))
        .catch(err => next(err))
}

const editProfile = (req, res, next) => {
    const { _id } = req.params

    User.findById(_id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ errorMessages: 'Usuario no encontrado' })
            }
            const { username, avatar, role, about } = user
            res.json({ username, avatar, role, about })
        })
        .catch((err) => next(err))
}

const editProfileHandler = (req, res, next) => {
    const { avatar, about } = req.body
    const { _id } = req.params
    User
        .findByIdAndUpdate({ _id }, {
            avatar,
            about

        }, { new: true })
        .then(updatedUser => {
            const payload = { _id, username: updatedUser.username, role: updatedUser.role, avatar: updatedUser.avatar }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                { algorithm: 'HS256', expiresIn: "6h" }
            )
            return res.json({ authToken, updatedUser })
        })
        .catch(err => next(err))

}

const deleteProfile = (req, res, next) => {

    const { _id } = req.params

    const promises = [
        User.findByIdAndDelete(_id),
        Story.deleteMany({ writer: _id }),
        Comment.deleteMany({ author: _id })
    ]

    Promise
        .all(promises)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    getDetailsProfile,
    editProfile,
    editProfileHandler,
    deleteProfile
}