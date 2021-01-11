INTRODUCTION TO MongoDB

# mongoose
- Schema - new Schema(options) - create Schema, options - object
- model - model(modelName, schema) - create model, we need to convert our blogSchema into a Model we can work with

Model properties&methods:
- find() - if without arguments, then get all items, else by arguments
- findByID() - find item by id
- findByIdAndUpdate(id, body) - find item by id and update item 