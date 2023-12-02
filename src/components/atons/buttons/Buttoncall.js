import React from 'react'
import styles from './Buttoncall.module.css'

function Buttoncall(props) {
  return (
    <a className={styles.buttoncall} href={props.href}>{props.text}</a>
  )
}

export default Buttoncall