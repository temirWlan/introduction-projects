# VALIDATION

# express-validator
	Main properties&methods:
		- body:
			Main properties&methods:
				- isEmail() - check email
				- isLength(options) - check length, options example: { min: 8, max: 100 }
				- withMessage(msg) - show message
				- isAlphanumeric() - latin 
				- custom(callback) - add own validator

		- validationResult(request) - return errors
			Main properties&methods:
				- isEmpty - check empty
