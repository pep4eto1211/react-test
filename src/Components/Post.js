import React, { Component } from 'react';
import Comment from './Comment';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var postData = this.props.postData;

        return (
            <div class="single-post">
                <div class="post-title">{postData.title}</div>
                <div class="post-data">
                    <span class="post-user">Posted by: {postData.authorName}</span>
                    <span class="post-likes">Likes: {postData.numberOfLikes}</span>
                </div>
                <div class="clear"/>
                <div class="comments-title">Comments:</div>
                <div class="comments-container">
                    {postData.comments.map(singleCommentContent =>
                        <Comment text={singleCommentContent} />)}
                </div>
            </div>
        );
    }
}