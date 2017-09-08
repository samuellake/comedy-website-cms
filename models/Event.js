var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Event = new keystone.List('Event', {
	map: { name: 'eventName' },
	autokey: { path: 'slug', from: 'eventName', unique: true },
});

Event.add({
  eventName: {type: String, required: true},
  eventDate: {type: Types.Date, default: Date.now, required: true},
  eventLocation: {type: String },
  eventImage: {type: Types.CloudinaryImage }
});

Event.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Event.defaultColumns = 'eventName';
Event.register();
