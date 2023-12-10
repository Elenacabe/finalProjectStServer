const User = require('../models/User.model')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const signUp = (req, res, next) => {

    const { email, password, username, avatar, birthDate, about } = req.body

    if (password.length < 2) {
        return res.status(400).json({ errorMessages: ['La contraseña debe tener 3 caracteres al menos'] })
    }

    return (



        User
            .findOne({ email })
            .then((foundUser) => {

                if (foundUser) {
                    return res.status(400).json({ errorMessages: ["El user ya existe"] })

                }

                const salt = bcrypt.genSaltSync(saltRounds)
                const hashedPassword = bcrypt.hashSync(password, salt)

                return User.create({ email, password: hashedPassword, username, avatar, birthDate, about })
            })
            .then(() => res.sendStatus(201))
            .catch(err => next(err)))
}

const logIn = (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ errorMessages: ["Email y contraseña requeridos."] });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ errorMessages: ["Usuario no encontrado."] })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, role, avatar } = foundUser;
                const payload = { _id, email, username, role, avatar }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.json({ authToken })

            }
            else {
                res.status(401).json({ errorMessages: ["Los datos son incorrectos"] });
            }

        })
        .catch(err => next(err));
}


module.exports =
{
    signUp,
    logIn
}