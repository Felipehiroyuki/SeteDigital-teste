import Head from 'next/head'
import styles from '@/styles/Confirmacao/Confirmacao.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export default function Confirmacao() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Foguetes</title>
            </Head>

            <div className={styles.confir__container}>
                teste
            </div>
        </div>
    )
}
