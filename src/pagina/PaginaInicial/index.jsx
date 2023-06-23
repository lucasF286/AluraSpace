import Cabecalho from "../../componentes/Cabecalho";
import Footer from "../../componentes/Footer";
import Menu from "../../componentes/Menu";
import banner from "./banner.png"
import styles from "./paginaInicial.module.scss"

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
            <Menu />
            <div className={styles.principal__imagem}>
                <h1>A galeria mais completa do espaço</h1>
                <img src={banner} alt="A imagem da terra vista do espaço" />
            </div>
                </section>
            </main>
            <Footer />
        </>
    )
}