const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a blog title"]
        },
        description: {
            type: String,
            required: [true, "Please enter a blog description"]
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Blog = mongoose.model('Blog', blogSchema);

module.exports =  Blog;