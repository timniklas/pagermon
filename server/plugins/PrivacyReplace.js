/*
Privacy Replace
Show only hashed messages
*/
var crypto = require('crypto');
var logger = require('../log');
function run(trigger, scope, data, config, callback) {
    data.message = crypto.createHash('sha256').update(data.message).digest('hex')
    logger.main.debug('PrivacyReplace: Message has change to: '  + data.message)
    callback(data);
}

module.exports = {
    run: run
}
