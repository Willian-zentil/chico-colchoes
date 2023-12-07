import React, { useState } from 'react'
import styles from './Header.module.css'
import { slide as Menu } from 'react-burger-menu'

import logo from '../../images/logo.png'
import Buttoncall from '../atons/buttons/Buttoncall'
import ContainerSmall from '../atons/container/ContainerSmall'

function Header() {

  const [menuOpen, setmenuOpen] = useState()

  const closeMenu = (e) => {
    setmenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <ContainerSmall>
        <div>
          <img className={styles.logo} src={logo} alt='logo' />
        </div>
        <div className={styles.hamburguerMenu}>
          {window.innerWidth < 992 &&
            <Menu right width={'100%'} isOpen={menuOpen}>
              <a id="home" className="menu-item" href="#servicos" onClick={closeMenu}>Nossos serviços</a>
              <a id="about" className="menu-item" href="#infinity" onClick={closeMenu}>Produtos</a>
              <a className="menu-item--small" href='https://wa.me/5514996272743' target='_blank' onClick={closeMenu}>Fale Conosco</a>
            </Menu>
          }
        </div>
        <div className={styles.btnGroup}>
          <a href='#servicos'>Nossos serviços</a>
          <a href='#infinity'>Produtos</a>
          <Buttoncall text="FALE CONOSCO" href={'https://wa.me/5514996272743'} />
        </div>
      </ContainerSmall>
    </header>
  )
}

export default Header