import React from 'react'
import styles from './Orcamento.module.css'
import ContainerSmall from '../atons/container/ContainerSmall'
import Buttoncall from '../atons/buttons/Buttoncall'

function Orcamento() {
    return (
        <section className={styles.orcamento}>
            <ContainerSmall>
                <h3>Venha fazer um orçamento</h3>
                <Buttoncall text={'Solicitar Orçamento'} href={'https://wa.me/5514996272743'} />
            </ContainerSmall>
            <video width="720" height="440" controls={true}>
                <source src="https://techlinecolchoes.com.br/wp-content/uploads/2022/01/Sistema-Quantico.mp4" type="video/mp4" />
            </video>
        </section>
    )
}

export default Orcamento