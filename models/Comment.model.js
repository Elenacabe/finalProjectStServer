const { Schema, model } = require('mongoose')

const commentSchema = new Schema({

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: String,
        required: [true, 'Es necesario que escribas algo']

    },
    storyId: {
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }
},
    {
        timestamps: true
    }
)

const Comment = model("Comment", commentSchema)

module.exports = Comment