// models/blacklistedToken.model.js
const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // TTL: 24h = 24*60*60 = 86400s
    }
});

module.exports = mongoose.model('BlacklistedToken', blacklistTokenSchema);
