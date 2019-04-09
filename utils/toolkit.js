module.exports = {
    errorMessage(statusCode, message) {
        if (typeof message === 'object') {
            return message;
        } else {
            if (statusCode === 200) {
                return {
                    success: message
                };
            } else {
                return {
                    error: message
                };
            }
        }
    },
    handler(requestObject, responseObject, statusCode, data, _super = false) {
        if (!_super) {
            responseObject.status(statusCode).json(this.errorMessage(statusCode, data));
        }
    }

};