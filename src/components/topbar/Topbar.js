import React from 'react'
import styles from './Topbar.module.css'
import ContainerSmall from '../atons/container/ContainerSmall'

import facebook from '../../images/Face-Branco.png'
import Twitter from '../../images/Twitter-Branco.png'
import tiktok from '../../images/Tik-Tok-Branco.png'
import Insta from '../../images/Insta-Branco.png'
import Youtube from '../../images/Youtube-Branco.png'


function Topbar() {
    return (
        <div className={styles.Topbar}>
            <ContainerSmall>
                <div>
                    <a href='/'><img src={facebook} alt='facebook' /></a>
                    <a href='/'><img src={Twitter} alt='Twitter' /></a>
                    <a href='/'><img src={tiktok} alt='tiktok' /></a>
                    <a href='/'><img src={Insta} alt='Insta' /></a>
                    <a href='/'><img src={Youtube} alt='Youtube' /></a>
                </div>
            </ContainerSmall>
        </div>
    )
}

export default Topbar