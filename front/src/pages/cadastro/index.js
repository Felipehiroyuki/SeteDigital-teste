import Head from 'next/head'
import styles from '@/styles/Cadastro/Cadastro.module.css'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Cadastro() {
    const [name, setName] = useState("")
    const [age, setAge] = useState()

    const router = useRouter();

    function cadastrar(e) {
        e.preventDefault();

        if(!name || !age){
            return toast.error('O campo nome e idade é obrigatorio', {
                autoClose: 4000,
                position: toast.POSITION.TOP_RIGHT
            });
        }
        
        const BASE_URL = "http://localhost:3333/api";

        const url =  `${BASE_URL}/cadastro`;

        axios.post(url, {
            name,
            age: Number(age)
        }).then(resp => {
            if(resp.status === 200){
                toast.success('Usuário cadastrado com sucesso', {
                    autoClose: 4000,
                    position: toast.POSITION.TOP_RIGHT
                });

                return router.push('/login');
            }
        }).catch(error => {
            return toast.error(`${error?.response?.data.message}`, {
                autoClose: 4000,
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }

    return (<div className={styles.container}>
        <Head>
            <title>Registro</title>
        </Head>
        <div className={styles.cadastro__container}>
            <form className={styles.form} onSubmit={cadastrar}>
                <input
                    name="name"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Seu Nome'
                    className={styles.input}>
                </input>
                <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder='Sua Idade'
                    className={styles.input}>
                </input>
                <button 
                    className={styles.button}>
                    CADASTRAR
                </button>
            </form>
        </div>
    </div>
    )
}