import mongoose from 'mongoose';

const url = 'localhost';
const database = 'todo-list';
const port = 27017;

mongoose.connect(`mongodb://${url}:${port}/${database}`, {useNewUrlParser:true});

export { mongoose };