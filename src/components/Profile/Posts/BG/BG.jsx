import React, { Component } from 'react'
import css from './BG.module.css';
import bg_1 from '../../../../photos/bg_1.png';
import bg_2 from '../../../../photos/bg_2.png';

export default class BG extends Component {
    render() {
        return (
            <div>
                <img src={bg_1} className={css.bg_1}/>
                <img src={bg_2} className={css.bg_2}/>
            </div>
        )
    }
}
