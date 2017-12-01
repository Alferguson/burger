var orm = require("../config/orm.js");

// take in orm functions and establish parameters and callbacks
var burger = {
    // display all the burgers
	all: function(cb) {
		orm.all(function(res) {
			cb(res);
		});
	},
  	// create a new burger, cols is where it will be entered, vals is what the name of that cell will be cb will be a res.json
  	create: function(cols, vals, cb) {
  		orm.create(cols, vals, function(res) {
  			cb(res);
  		});
  	},
    // update state of burger for devoured
  	update: function(objColVals, condition, cb) {
  		orm.update(objColVals, condition, function(res) {
  			cb(res);
  		});
  	}
};
// export to burgers_controller.js
module.exports = burger;