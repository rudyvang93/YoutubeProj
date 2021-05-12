const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    text:{type: String, required: true, minlength:2, maxlength:300},
    likes:{type: Number, default:0},
    dislikes:{type: Number, default:0},
    date:{type: Date, default:Date}
})
const commentSchema = new mongoose.Schema({
    text:{type: String, requred: true, minlength:2, maxlength:300},
    likes:{type: Number, default:0},
    dislikes:{type: Number, default:0},
    replies:[{type: replySchema}],
    videoId:{type:String, required:true},
    date:{type:Date, default:Date.now}
})

module.exports = mongoose.model("Comment", commentSchema);
module.exports = mongoose.model("Reply", replySchema);