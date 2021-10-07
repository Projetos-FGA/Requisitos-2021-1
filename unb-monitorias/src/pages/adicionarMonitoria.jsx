import styles from '../styles/AdicionarMonitoria.module.css'
import Layout from '../components/Layout.jsx'
import React, { useEffect, useState } from "react";


export default function AdicionarMonitoria(){

    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [professor, setProfessor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [vagas, setVagas] = useState('')

    function criarMonitoria(){
        console.log(codigo, nome, professor, descricao, vagas)
    }
    return (
        <Layout>
             <div className={styles.main}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Cria uma nova monitoria!</h1>
                        <div className={styles.fields}>
                            <input type="text" placeholder="Código da disciplina" className={styles.field} onChange={event => setCodigo(event.target.value)}/>
                            <input type="text" placeholder="Nome da disciplina" className={styles.field} onChange={event => setNome(event.target.value)}/>
                            <input type="text" placeholder="Professor" className={styles.field} onChange={event => setProfessor(event.target.value)}/>
                            <input type="text" placeholder="Descrição" className={styles.field} onChange={event => setDescricao(event.target.value)}/>
                            <input type="number" placeholder="Número de vagas" className={styles.field} onChange={event => setVagas(event.target.value)}/>
                        </div>
                        <button className={styles.btnCriar} onClick={criarMonitoria}>Criar</button>
                    </div>
                </div>
        </Layout>
    )
}