import mongoose from 'mongoose';

class MongoDB{
    constructor() {
        this.mongoose = mongoose;
        this.url = 'localhost';
        this.database = 'todo-list';
        this.port = 27017;
        
        this.mongoose.connect(`mongodb://${this.url}:${this.port}/${this.database}`, {useNewUrlParser:true});
    }

    getMongoose = () => {
        return this.mongoose;
    }
}

export default new MongoDB();