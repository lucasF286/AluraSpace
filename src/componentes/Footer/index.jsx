import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.icones}>
                <img src={facebook} alt="logo do facebook" />
                <img src={twitter} alt="logo do twitter" />
                <img src={instagram} alt="logo do instagram" />
            </div>
            <div>
                <h4 className={styles.texto}>Desenvolvivo por Alura.</h4>
            </div>
        </footer>
    )
}
