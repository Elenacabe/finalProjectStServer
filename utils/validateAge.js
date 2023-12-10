const validateAge = function (value) {
    const currentDate = new Date()
    const birthdate = new Date(value)
    const age = currentDate.getFullYear() - birthdate.getFullYear()
    if (age < 18) {
        return new Error('Tienes que tener 18 años')
    }
}
module.exports = validateAge