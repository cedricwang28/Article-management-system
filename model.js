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




let ArticleSchema = new Schema({
    title:{
        type:String,
        required:[true,'title is required']
    },
    content:{
        type:String,
        required:[true,'content is required']
    },
    id:{
        type:Number,
        required:[true,'number is required']
    },
    username:{
        type:String,
        required:[true,'username is required']
    }
});

let Article = mongoose.model('article',ArticleSchema);

module.exports = {LoginCheck, Article}