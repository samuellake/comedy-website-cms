var async = require('async'),
	keystone = require('keystone');

var Event = keystone.list('Event');

/**
 * List Posts
 */
exports.list = function(req, res) {
	Event.model.find(function(err, items) {

		if (err) return res.apiError('database error', err);

		res.send({
			events: items
		});

	});
}

/**
 * Get Event by ID
 */
exports.get = function(req, res) {
	Event.model.findById(req.params.id).exec(function(err, item) {

		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');

		res.send({
			event: item
		});

	});
}
