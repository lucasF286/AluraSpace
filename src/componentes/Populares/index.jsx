import React from 'react'
import fotosPopulares from './fotos-populares.json'
import styles from './populares.module.scss'
import Botao from 'componentes/Botao'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
          {fotosPopulares.map((foto)=> {
            return (
              <li key={foto.id}>
                <img src={foto.path} alt={foto.alt} />
              </li>
            )
          })}
        </ul>
        <Botao>Ver mais fotos</Botao> 
    </aside>
  )
}
