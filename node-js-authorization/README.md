# AUTHORIZATION

# server 
	After use session, request will have session property
	Request: 
		- session 
			Main properties&methods
				- save(callback) - save the session back to the store, replacing the contents on the store with the contents in memory, callback for error
				- destroy(callback) - destroys the session and will unset the property, callback for error

# express-session
	Main properties&methods:
		- session({
				secret: string - secret word key,
				resave: boolean - resave session store,
				saveUninitialized: boolean - saving session,
				store: string - session store instance
			}) - set options for session

# connect-mongodb-session
	Main properties&methods:
		uri: string - MongoDB connection string
		databaseName: string - MongoDB database to store sessions in
		collection: string - MongoDB collection to store sessions in

# bcryptjs
	Main properties&methods:
		- hash(password, salt) - hash password
		- compare(password, hashPassword) - compare two passwords

# csurf
	Main properties&methods:
		- csrfToken() - function to make a token which should be added to requests which mutate state,
										this token is validated against the visitor's session or csrf cookie