import Layout from '../components/Layout'
import styles from '../styles/Registrar.module.css'
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import { supabase } from '../utils/supabaseClient';


export default function Registrar(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('aluno')

    async function fazerRegistro() {
       console.log(email, nome,  senha, tipo)
       const result = await supabase.auth.signUp({
        email: email,
        password: senha
      })
      console.log(result)
    }
    return (
            <Layout>
                <div className={styles.main}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Cadastre-se aqui!</h1>
                        <span className={styles.subTitle}>
                            Já tem cadastro?
                            <Link  href="/login">
                                <span className={styles.link}>Faça login!</span>
                            </Link>
                        </span>
                        <div className={styles.fields}>
                            <input type="text" placeholder="Email" className={styles.field} onChange={event => setEmail(event.target.value)}/>
                            <input type="text" placeholder="Nome" className={styles.field} onChange={event => setNome(event.target.value)}/>
                            <input type="password" placeholder="Senha" className={styles.field} onChange={event => setSenha(event.target.value)}/>
                            <input type="checkbox"  className={styles.field} onChange={event => setTipo(event.target.value)}/>
                        </div>
                        <button className={styles.btnEntrar} onClick={fazerRegistro}>Cadastrar</button>
                        <div className={styles.divider}>
                            <span className={styles.dividerLine}></span>
                            <span> ou </span>
                            <span className={styles.dividerLine}></span>
                        </div>
                        <button className={styles.btnGoogle}>Registrar com Google+</button>
                    </div>
                </div>
            </Layout>
    )
}