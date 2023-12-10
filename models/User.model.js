const { Schema, model } = require("mongoose")
const validateAge = require("../utils/validateAge")

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'El email es necesario.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    username: {
      type: String,
      trim: true,
      required: [true, 'El username es necesario'],
      unique: true

    },
    birthDate: {
      type: Date,
      required: [true, 'Es necesario saber tu día de nacimiento'],
      validate: [validateAge, 'Debes tener al menos 18 años.']
    },
    avatar: {
      type: String
    },
    about: {
      type: String,
      required: [true, 'La descripción es necesaria'],
      minLength: [10, 'Debes escribir al menos 10 caracteres como descripción']
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    password: {
      type: String,
      required: [true, 'La contraseña es requerida']
    }
  },
  {

    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User

