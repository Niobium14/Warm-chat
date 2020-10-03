import React, { Component } from 'react'
import BG from './BG/BG';
import Textarea from './Textarea/Textarea';
import Post from './Post/Post';
import css from './Posts.module.css';
 
export default class Posts extends Component {
    render() {
        return (
            
            <div className={css.posts}>
                <BG />
                <Textarea />
                <Post />
            </div>
        )
    }
}
