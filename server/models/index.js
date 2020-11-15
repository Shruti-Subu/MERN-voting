const mongoose=require('mongoose');

//logout every transcation going on db
mongoose.set('debug',true);

//allows asynchronous functns
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/vote');

module.exports.User=require('./user');
module.exports.Poll=require('./poll');