module.exports = function(to) {
	return {
		from: process.env.EMAIL,
		to,
		subject: 'Registration',
		html: ` 
			<h1>Welcome to our courses shop</h1>
			<p>Your account has been created</p>
			<hr />
			<a href="${process.env.BASE_URL}">Express</a>
		`
	};
}