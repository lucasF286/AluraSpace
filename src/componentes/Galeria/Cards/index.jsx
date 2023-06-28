import React from 'react'
import Card from './Card';

export default function Cards({styles, fotos}) {
    return (
        <ul className={styles.galeria__cards}>
            {fotos.map((foto) => {
                return (
                    <Card foto={foto} styles={styles}/>
                );
            })}
        </ul>
    )
}
