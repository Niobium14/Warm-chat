import React, { Component } from 'react'
import css from './MusicBG.module.css';
import bg_1 from '../../../img/bg_music.png';

export default class BG extends Component {
    render() {
        return (
            <div className={css.modules}>
                <img src={bg_1} className={css.bg_1}/>
            </div>
        )
    }
}
