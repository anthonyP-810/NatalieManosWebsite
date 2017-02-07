var Event = require('../model/event.js')();


function EventController() {
    console.log("Inside event controller");

    this.create = function (req, res) {
        var event = new Event(req.body);
        event.save(function (err) {
            if (err) {
                console.log("Something went wrong")
            }
            else
            {
                res.json({ event: event})
            }
        })
    }

}
module.exports = new EventController();
