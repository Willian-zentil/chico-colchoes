import React from 'react'
import styles from './Fullbanner.module.css'

import fullbanner from '../../images/Disney-2-1.webp'

function Fullbanner() {
  return (
    <section>
        <img className={styles.fullbanner} src={fullbanner} alt='fullbanner' />
    </section>
  )
}

export default Fullbanner