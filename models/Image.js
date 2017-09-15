var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Image = new keystone.List('Image', {
	map: { name: 'filename' },
	autokey: { path: 'slug', from: 'filename', unique: true },
});

Image.add({
	filename: { type: String, required: true, default: Date.now },
	imageRef: { type: Types.CloudinaryImage }
});

Image.relationship({ ref: 'Event', path: 'events', refPath: 'eventImage' });

Image.register();
