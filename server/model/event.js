console.log("Event model")

module.exports = function () {
    var mongoose = require('mongoose');

    var eventSchema = new mongoose.Schema({
        company: { type: String },
        email: { type: String },
        date: { type: Date },
        information: { type: String }
    }, { timestamps: { created_at: 'created_at', updated_at: 'updated_at' } });

    mongoose.model('Event', eventSchema)
    var Event = mongoose.model('Event');
    return Event;
}
