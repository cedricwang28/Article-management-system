let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let LoginSchema = new Schema({
    username:{
        type:String,
        required:[true,'name is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
});

let LoginCheck = mongoose.model('loginPractice',LoginSchema);

module.exports = LoginCheck;