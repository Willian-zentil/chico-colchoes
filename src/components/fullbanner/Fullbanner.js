import React from 'react'
import styles from './Fullbanner.module.css'

import fullbanner from '../../images/Blue Dark Professional Geometric Business Project Presentation  (1).png'

function Fullbanner() {
  return (
    <section>
        <img className={styles.fullbanner} src={fullbanner} alt='fullbanner' />
    </section>
  )
}

export default Fullbanner