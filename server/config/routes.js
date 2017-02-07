'use strict'

console.log('future routes');
var event = require('../controller/eventController.js');
console.log(event)
//var product = require('../controller/productController.js');

module.exports = function (app) {
    app.post('/event', event.create);
    //app.get('/getProducts1', product.show1)
    //app.post('/login', user.create);
    //app.post('/topic', topic.create)
    //app.put('/user/:id', user.update);
    //app.delete('/user/:id', user.delete);
};
