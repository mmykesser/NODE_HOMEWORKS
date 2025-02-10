const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const {title, content} = req.body;
        if (!title || !content) {
            return res.status(400).json({message: 'Specify the title and content'});
        }
        const post = new Post({title, content, owner: req.userId});
        await post.save();
        return res.status(201).json({message: 'Post successfully saved', post});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Something went wrong1'});
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find({owner: req.userId});
        return res.status(200).json({posts});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Something went wrong'});
    }
};

exports.getPostsById = async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id})
        if (!post) {
            return res.status(404).json({message: 'Post not found'});
        }
        return res.status(200).json(post);
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Something went wrong'})
    }
}

exports.updatePost = async (req, res) => {
    try {
        const {title, content} = req.body;
        const post = await Post.findOneAndUpdate(
            {_id: req.params.id, owner: req.userId},
            {title, content},
            {new: true}
        );
        if (!post) {
            return res.status(404).json({message: 'Post not found'});
        }
        return res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'})
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({_id: req.params.id, owner: req.userId});
        if (!post) {
            return res.status(404).json({message: 'Post not found'});
        }
        return res.status(200).json({message: 'Post deleted'});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'Server error'})
    }
};