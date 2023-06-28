import React, { Children } from 'react'
import styles from './Botao.module.scss'

export default function Botao({children}) {
  return (
    <button className={styles}>{children}</button>
  )
}
