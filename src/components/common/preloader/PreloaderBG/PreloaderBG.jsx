import React, { Component } from 'react'
import css from './PreloaderBG.module.css';
import white from '../../../../img/Just-white-square.png';

export default class PreloaderBG extends Component {
    render() {
        return (
            <div>
                <img src={white} className={css.white}/>
            </div>
        )
    }
}
