import React, { Component } from 'react'
import css from './ProfileBG.module.css';
import bg_1 from '../../../../img/bg_1.png';
import bg_2 from '../../../../img/bg_2.png';

export default class BG extends Component {
    render() {
        return (
            <div className={css.bg}>
                <img src={bg_1} className={css.bg_1}/>
                <img src={bg_2} className={css.bg_2}/>
            </div>
        )
    }
}
