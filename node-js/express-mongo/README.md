INTRODUCTION TO MongoDB

# mongoose
- Schema - new Schema(options) - create Schema, options - object
- model - model(modelName, schema) - create model, we need to convert our blogSchema into a Model we can work with

Schema properties&methods:
- Types - The various built-in Mongoose Schema Types
- methods - add method schema method, Example: cartSchema.methods.removeFromCart = function(arg) {...}

Model properties&methods:
- find() - if without arguments, then get all items, else by arguments
- findByID() - find item by id
- findByIdAndUpdate(id, body) - find item by id and update item 
- findOne() - find one item
- populate(option) - populates document references
- select(fields) - select and return fields
- execPopulate() - 
