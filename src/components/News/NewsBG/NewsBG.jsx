import React, { Component } from 'react'
import css from './NewsBG.module.css';
import bg_1 from '../../../img/news_bg1.png';
import bg_3 from '../../../img/news_bg3.png';

export default class BG extends Component {
    render() {
        return (
            <div className={css.modules}>
                <img src={bg_1} className={css.bg_1}/>
                <img src={bg_3} className={css.bg_3}/>
            </div>
        )
    }
}
