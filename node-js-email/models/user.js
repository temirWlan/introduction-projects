const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}, 
	password: {
		type: String,
		required: true
	},
	resetToken: String,
	resetTokenExp: Date,
	cart: {
		items: [
			{
				count: {
					type: Number,
					required: true,
					default: 1
				},
				courseId: {
					type: Schema.Types.ObjectId,
					required: true,
					ref: 'Course'
				}
			}
		]
	}
});

userSchema.methods.addToCart = function(course) {
	const items = [...this.cart.items];
	const idx = items.findIndex(item => {
		return item.courseId.toString() === course._id.toString() 
	});

	if (idx >= 0) {
		items[idx].count = this.cart.items[idx].count + 1;
	} else {
		items.push({
			count: 1,
			courseId: course._id
		})
	}

	this.cart = { items };
	return this.save();
}

userSchema.methods.removeFromCart = function(id) {
	let items = [...this.cart.items];
	const idx = items.findIndex(item => item.courseId.toString() === id.toString());

	if (items[idx].count === 1) {
		items = items.filter(item => item.courseId.toString() !== id.toString());
	} else {
		items[idx].count--;
	}

	this.cart = { items };
	return this.save();
}

userSchema.methods.clearCart = function() {
	this.cart = { items: [] };
	return this.save();
}

module.exports = model('User', userSchema);