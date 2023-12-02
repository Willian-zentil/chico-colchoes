import React from 'react'
import ContainerSmall from '../atons/container/ContainerSmall'
import styles from './Footer.module.css'

import facebook from '../../images/Face-Branco.png'
import Twitter from '../../images/Twitter-Branco.png'
import tiktok from '../../images/Tik-Tok-Branco.png'
import Insta from '../../images/Insta-Branco.png'
import Youtube from '../../images/Youtube-Branco.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ContainerSmall>
                <h3>Nos siga em nossas redes sociais</h3>
                <div>
                    <a href='/'><img src={facebook} alt='facebook' /></a>
                    <a href='/'><img src={Twitter} alt='Twitter' /></a>
                    <a href='/'><img src={tiktok} alt='tiktok' /></a>
                    <a href='/'><img src={Insta} alt='Insta' /></a>
                    <a href='/'><img src={Youtube} alt='Youtube' /></a>
                </div>
            </ContainerSmall>
        </footer>
    )
}

export default Footer