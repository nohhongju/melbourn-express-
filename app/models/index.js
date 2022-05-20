import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './User.js'
import TodoModel from './Todo.js'

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
db.Todo = new TodoModel(mongoose)

export default db