const Log = require('../db/models/Log');

module.exports = {
    response(statusCode, message) {
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
        responseObject.status(statusCode).json(this.response(statusCode, data));
        if (_super) {
            Log.create({
                data: JSON.stringify(this.response(statusCode, data))
            });
        }
    }
};