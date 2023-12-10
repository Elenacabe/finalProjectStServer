
const { Schema, model } = require("mongoose")
const storySchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'El título es necesario']
    },
    story: {
        type: String,
        required: [true, 'Tienes que escribir una historia'],
        minLength: [100, "No puede contener menos de 100 caracteres"],
        maxLength: [700, "No puedes pasarte de 700 caracteres"]
    },

    cover: {
        type: String,
        default: "https://shorturl.at/kowxI"
    },
    valoration:
        [{
            userId: { type: Schema.Types.ObjectId, ref: 'User' },
            vote: { type: Number, enum: [1, 2, 3, 4, 5] }
        }]
    ,

    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, {
    timestamps: true
}
)



const Story = model("Story", storySchema)

module.exports = Story