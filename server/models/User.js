const bcrypt= require('bcrypt');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_Name:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    },
    verified:{
        type:Boolean,
        default:false
    }});

UserSchema.methods.generateHash=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};
UserSchema.methods.validPassword=function(password){
    return bcrypt.compareSync(password,this.password);
};
module.exports = mongoose.model('User', UserSchema);