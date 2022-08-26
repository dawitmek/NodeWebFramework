let mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    image: { type: mongoose.Schema.Types.ObjectId, required: false, unique: false },
    userId: { type: mongoose.Schema.Types.ObjectId, required: false, unique: false },
    public: { type: Boolean, default: false, required: false, unique: false },
});

let Post = mongoose.model('Post', postSchema);

module.exports = Post;