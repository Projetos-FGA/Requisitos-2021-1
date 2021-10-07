import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar(){
    const autenticado = false;
    return (
        <nav className={styles.navbar}>
            <div className={styles.menuItem}>
                <Link href="/monitorias">Monitorias</Link>
            </div>
            {/* <div className={styles.menuItem}>
                <Link href="/professor">Professor</Link>
            </div>
            <div className={styles.menuItem}>
                <Link href="/aluno">Aluno</Link>
            </div>
            <div className={styles.menuItem}>
                <Link href="/sobre">Sobre</Link>
            </div> */}
            <span className={styles.spacer}></span>
            <div className={styles.menuItem}>
                { autenticado ? <Link href="/conta">Conta</Link> : <Link href="/login">Entrar/Cadastrar</Link> }
            </div>
        </nav>
    )
}