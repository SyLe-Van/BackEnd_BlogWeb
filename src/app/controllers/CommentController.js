const Comment = require('../models/Comment');

class CommentController {
    async getAllComments(req, res) {
        try {
            const { postId } = req.params;
        
            if (!postId) {
              return res.status(400).json({ message: 'Post ID is required' });
            }
        
            const comments = await Comment.find({ postid: postId }).populate('userid');
        
            res.status(200).json({ comments });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }
    }

    
}

module.exports = new CommentController;