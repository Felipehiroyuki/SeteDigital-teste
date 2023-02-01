import Head from 'next/head'
import styles from '@/styles/Login/Login.module.css'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
    const [name, setName] = useState("")

    const router = useRouter();

    function executeLogin(){
        if(!name){
            return toast.error('Campo nome é obrigatório', {
                autoClose: 4000,
                position: toast.POSITION.TOP_RIGHT
            });
        }

        const BASE_URL = "http://localhost:3333/api";

        const url =  `${BASE_URL}/login`;

        axios.post(url, {
            name
        }).then(resp => {
            if(resp.status === 200){
                toast.success('Login realizado, confirme sua idade', {
                    autoClose: 4000,
                    position: toast.POSITION.TOP_RIGHT
                });

                return router.push('/confirmacao/'+name);
            }
        }).catch(error => {
            return toast.error(`${error.response.data.message}`, {
                autoClose: 4000,
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }

    return (<div className={styles.container}>
        <Head>
            <title>Login</title>
        </Head>
        <div className={styles.login__container}>
            <div className={styles.form}>
                <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Seu Nome'
                    className={styles.input}>
                </input>
                <button className={styles.button} onClick={() => executeLogin()}>
                    ENTRAR
                </button>
                <button className={styles.cadastro} onClick={() => router.push('/cadastro')}>Cadastre-se Aqui.</button>
            </div>
        </div>
    </div>
    )
}
