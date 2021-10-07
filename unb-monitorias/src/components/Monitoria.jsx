import styles from "../styles/Monitoria.module.css"
import React, { useEffect, useState } from "react";
import Modal from "./Modal";


export default function Disciplinas(props){
    const [showModal, setShowModal] = useState(false)
    const isProfessor = true
    function apagar() {
        //metodo para apagar uma monitoria
    }

    return(
        <div className={styles.card}>
            <div className={styles.topo}>
                <h4 className={styles.codigo}>{props.codigo}</h4>
                <span className={styles.spacer}></span>
                <button className={styles.btnDetalhar} onClick={() => {setShowModal(true)}}>Detalhar</button>
                {isProfessor ?  <button className={styles.btnApagar} onClick={apagar}>Apagar</button> : <></>}
            </div>
            <span className={styles.nome}>{props.nome}</span>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                dasudhasudhasudhuhasuh
            </Modal>
        </div>
    )
}