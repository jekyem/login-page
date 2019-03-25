import 'babel-polyfill';

import MongoDB from './MongoDB';

class UserCollection {
    constructor() {
        this.mongoose = MongoDB.getMongoose();
        this.userSchema = this.makeUserSchema();
        this.userModel = this.makeUserModel();
    }

    makeUserSchema = () => {
        return new this.mongoose.Schema({
            id: {type: String, required: true, unique: true},
            password: {type: String, required: true}
        });
    }

    makeUserModel = () => {
        return this.mongoose.model('user', this.userSchema);
    }

    getUser = async (id) => {
        return await this.userModel.findOne({"id":id});
    }
}

export default new UserCollection;