const express = require('express');
const router = express.Router();
const commentController = require('../app/controllers/CommentController');

router.get('post/:postid/getComments', commentController.getAllComments)

module.exports = router;