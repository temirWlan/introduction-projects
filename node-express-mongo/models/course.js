const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = model('Course', courseSchema);