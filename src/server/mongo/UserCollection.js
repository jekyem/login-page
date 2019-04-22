import 'babel-polyfill';

import * as TodoDB from './TodoDB';

class UserCollection {
    constructor() {
        this.userSchema = this.makeUserSchema();
        this.userModel = this.makeUserModel();
    }

    makeUserSchema = () => {
        return new TodoDB.mongoose.Schema({
            id: {type: String, required: true, unique: true},
            password: {type: String, required: true},
            salt: {type: String, required: true}
        });
    }

    makeUserModel = () => {
        return TodoDB.mongoose.model('user', this.userSchema);
    }

    addUser = async (userData) => {
        var user = new this.userModel();
        user.id = userData.id;
        user.password = userData.password;
        user.salt = userData.salt;
        
        try {
            await user.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getUser = async (id) => {
        return await this.userModel.findOne({"id":id});
    }
}

export default new UserCollection;