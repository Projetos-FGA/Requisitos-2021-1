import Layout from '../components/Layout'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import React, { useEffect, useState } from "react";

export default function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function fazerLogin() {
        console.log(email, senha)
    }

    return (
            <Layout>
                <div className={styles.main}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Faça Login aqui!</h1>
                        <span className={styles.subTitle}>
                            Ainda não tem cadastro?
                            <Link  href="/registrar">
                                <span className={styles.link}>Registre-se!</span>
                            </Link>
                        </span>
                        <div className={styles.fields}>
                            <input type="text" placeholder="Email" className={styles.field} onChange={event => setEmail(event.target.value)}/>
                            <input type="password" placeholder="Senha" className={styles.field} onChange={event => setSenha(event.target.value)}/>
                        </div>
                        <button className={styles.btnEntrar} onClick={fazerLogin}>Entrar</button>
                        <div className={styles.divider}>
                            <span className={styles.dividerLine}></span>
                            <span> ou </span>
                            <span className={styles.dividerLine}></span>
                        </div>
                        <button className={styles.btnGoogle}>Login com Google+</button>
                    </div>
                </div>
            </Layout>
    )
}