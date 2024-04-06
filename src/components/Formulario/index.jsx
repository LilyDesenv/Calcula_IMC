import { useEffect, useState } from "react"

import styles from './Formulario.module.css'

const Formulario = () => {

    const [resultado, setResultado] = useState('');
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    useEffect(()=>{

    },[altura,peso])
    
    const calculaIMC = () => {
        return peso / (altura * altura);
    }

    const renderizaResultado = () => {
        const imc = calculaIMC();
        if(imc < 17){
            return (
                <>  
                    <b>IMC: </b> {imc.toFixed(2)}<br />
                    <b>Classificação: </b><span className={styles.resultadoAbaixo}>Está muito abaixo do peso</span>
                </>
            )
        }
        else if(imc >= 17 &&  imc < 18.5){
            return (
                <>
                    <b>IMC: </b> {imc.toFixed(2)}<br />
                    <b>Classificação: </b><span className={styles.resultadoAbaixo}>Está abaixo do peso</span>
                </>
            )
        }else if(imc >= 18.5 &&  imc < 25){
            return (
                <>
                    <b>IMC: </b> {imc.toFixed(2)}<br />
                    <b>Classificação: </b><span className={styles.resultadoOk}>Está com peso normal</span>
                </>
            )
        }else if(imc >= 25 &&  imc < 30){
            return (
                <>
                    <b>IMC: </b> {imc.toFixed(2)}<br />
                    <b>Classificação: </b><span className={styles.resultadoAcima}>Está acima do peso</span>
                </>
            )
        }else if(imc >= 30 &&  imc < 35){
            return (
                <>
                    <b>IMC: </b> {imc.toFixed(2)}<br />
                    <b>Classificação: </b><span className={styles.resultadoAcima}>Está com Obesidade grau I</span>
                </>
            )
        }else if(imc >= 35 &&  imc < 40){
            return (
                <>
                    <b>IMC: </b> {imc.toFixed(2)}<br />
                    <b>Classificação: </b><span className={styles.resultadoAcima}>Está com Obesidade grau II</span>
                </>
            )
        }else if(imc > 40){
            return (
                <>
                    <b>IMC: </b> {imc.toFixed(2)}<br />
                    <b>Classificação: </b><span className={styles.resultadoAcima}>Está com Obesidade grau III</span>
                </>
            )
        }
        else{
            return (
                <>
                    <b>IMC: </b> 0 <br />
                    <b>Classificação: </b>
                </>
            )
        }
    }

    return(
        <div className="container">
            <h1 className={styles.titulo}>Calcula IMC</h1>

            <form className={styles.formulario}>
                <input className={styles.input} type="number" placeholder="Informe a Altura" onKeyUp={(e) => setAltura(e.target.value)} />
                <input className={styles.input} type="number" placeholder="Informe o Peso" onKeyUp={(e) => setPeso(e.target.value)} />
            </form>

            <div className={styles.resultado}>
                <p>{renderizaResultado()}</p>
            </div>    
        </div>
    )
}

export default Formulario