import React, { Component } from 'react'
import css from './Textarea.module.css';

export default class Textarea extends Component {
    render() {
        return (
            <div className={css.area}>
                <div className={css.add}>Add new post</div>
                <div className={css.textarea}></div>
            </div>
        )
    }
}
