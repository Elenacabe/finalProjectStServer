const setAverage = function (arrayStories) {
    const sum = arrayStories.valoration.reduce((acc, currentValue) => acc + currentValue.vote, 0)
    return sum
}
module.exports = setAverage