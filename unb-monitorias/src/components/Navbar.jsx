import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import { supabase } from '../utils/supabaseClient';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function Navbar(){
    const router = useRouter()
    const { user } = useContext(AuthContext) 
    async function logout() {
        try {
            await supabase.auth.signOut();
            router.push("/Home").then(
                setTimeout(()=>{
                    window.location.reload()
                },500)
            )
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.menuItem}>
                <Link href="/Home">Home</Link>
            </div>
            {
                 user ?
                 <>
                     <Link href="/Monitorias">Monitorias</Link>
                     <span className={styles.spacer}></span>
                     <div className={styles.flex}>
                         <span>Olá, {user.email}!</span>
                         <button className={styles.btnLogout} onClick={logout}>Logout</button>
                     </div>
                 </>
                 :
                 <>
                     <span className={styles.spacer}></span>
                     <Link href="/Login">Entrar/Cadastrar</Link>
                 </>
             }
        </nav>
    )
}