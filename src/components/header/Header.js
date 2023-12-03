import React from 'react'
import styles from './Header.module.css'
import { slide as Menu } from 'react-burger-menu'

import logo from '../../images/logo.png'
import Buttoncall from '../atons/buttons/Buttoncall'
import ContainerSmall from '../atons/container/ContainerSmall'

function Header() {

  const showSettings = (e) => {
    e.preventDefault()
  }


  return (
    <header className={styles.header}>
      <ContainerSmall>
        <div>
          <img className={styles.logo} src={logo} alt='logo' />
        </div>
        <div className={styles.hamburguerMenu}>
          {window.innerWidth < 992 &&
            <Menu right width={'100%'}>
              <a id="home" className="menu-item" href="/">Nossos serviços</a>
              <a id="about" className="menu-item" href="/about">Quem somos</a>
              <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
          }
        </div>
        <div className={styles.btnGroup}>
          <a href='#'>Nossos serviços</a>
          <a href='#'>Quem somos</a>
          <Buttoncall text="FALE CONOSCO" href={'#'} />
        </div>
      </ContainerSmall>
    </header>
  )
}

export default Header