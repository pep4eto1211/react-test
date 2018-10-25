import React, { Component } from 'react';
import Post from './Post'
import '../App.css'

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {
                    title: 'First Post',
                    authorName: 'Nikolay',
                    numberOfLikes: '34',
                    comments: [
                        'First Post, Comment 1',
                        'First Post, Comment 2',
                        'First Post, Comment 3'
                    ]
                },
                {
                    title: 'Second Post',
                    authorName: 'Ivan',
                    numberOfLikes: '15',
                    comments: [
                        'Second Post, Comment 1',
                        'Second Post, Comment 2'
                    ]
                },
                {
                    title: 'Third Post',
                    authorName: 'Stoyan',
                    numberOfLikes: '87',
                    comments: [
                        'Third Post, Comment 1',
                        'Third Post, Comment 2',
                        'Third Post, Comment 3',
                        'Third Post, Comment 4'
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <div id="wrapper">
                {this.state.posts.map(singlePost =>
                    <Post postData={singlePost} />)
                }
            </div>
        );
    }
}