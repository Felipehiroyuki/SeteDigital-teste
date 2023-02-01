import Head from 'next/head'
import styles from '@/styles/Confirmacao/Confirmacao.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export default function Confirmacao() {
    const [age, setAge] = useState()

    const router = useRouter()

    const { name } = router.query

    useEffect(() => {
        const BASE_URL = "http://localhost:3333/api";

        const url =  `${BASE_URL}/login`;

        axios.post(url, {
            name
        }).then(resp => {
            if(resp.status === 200){
                setAge(resp.data.result.age)
            }
        }).catch(error => {
            return toast.error(`${error.response.data.message}`, {
                autoClose: 4000,
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }, [])

    return (<div className={styles.container}>
        <Head>
            <title>Tela de Confirmação</title>
        </Head>
        <div className={styles.confir__container}>
            <form className={styles.form}>
                <span 
                    className={styles.texto__idade}>
                    Sua idade é:</span>
                    <span className={styles.idade}>
                        {age}
                    </span>
                <button className={styles.button} onClick={() => router.push('/foguete')}>
                    CONFIRMAR
                </button>
                <button className={styles.cancelar} onClick={() => router.push('/')}>Cancelar</button>
            </form>
        </div>
    </div>
    )
}
