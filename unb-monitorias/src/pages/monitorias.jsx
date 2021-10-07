import Layout from '../components/Layout'
import styles from '../styles/Monitorias.module.css'
import Monitoria from '../components/Monitoria'
import Link from 'next/link'

export default function Monitorias(){
    const monitorias = [
        {
            nome: 'Requisitos',
            codigo: 'FGA1234',
        },
        {
            nome: 'Métodos de desenvolvimento de Software',
            codigo: 'FGA4231',
        },
        {
            nome: 'Requisitos de Software',
            codigo: 'FGA0001',
        },
        {
            nome: 'Bancos de dados 2',
            codigo: 'FGA6623',
        }
    ]
    return (
            <Layout>
                <div className={styles.main} id="modal-root">
                    <div className={styles.header}>
                        <span className={styles.spacer}></span>
                        <Link href="/adicionarMonitoria"><button className={styles.btnAdicionar}>Adicionar Monitoria</button></Link>
                    </div>
                    <div className={styles.cards}>
                        {
                            monitorias.map((monitoria, index) => {
                                return <Monitoria key={index} monitoria={monitoria}></Monitoria>
                            })
                        }
                    </div>
                </div>
            </Layout>
    )
}