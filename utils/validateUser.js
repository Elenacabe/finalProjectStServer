const validateUser = function (valoration) {
    const userId = 'someUserId';
    if (valoration.some(entry => entry.userId.equals(userId))) {
        return true;
    } else {
        return false;
    }
};

module.exports = validateUser;
