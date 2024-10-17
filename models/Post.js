const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    "user":{
    type:String,
    required:true
},
    title:{
        type:String,
        requires:true
    },
    type:{
        type:String,
        requires:true
    },
    
    hashtag:String,
    "user":{
    type:String,
    required:true
},
    title:{
        type:String,
        requires:true
    },
    hashtag:{
        type:String,
        requires:true
    },
    location:{
        type:String,
        requires:true
    },
    url:{
    type:String,
    requires:true
},
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('posts',postSchema)