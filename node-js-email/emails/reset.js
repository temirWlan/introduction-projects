module.exports = function(to, token) {
	return {
		from: process.env.EMAIL,
		to,
		subject: 'Password recovery',
		html: ` 
			<h1>Did you want restore password?</h1>
			<a href="${process.env.BASE_URL}/auth/password/${token}">Recovery</a>
			<hr />
			<a href="${process.env.BASE_URL}">Express</a>
		`
	};
}