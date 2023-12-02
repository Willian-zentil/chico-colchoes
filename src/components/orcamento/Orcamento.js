import React from 'react'
import styles from './Orcamento.module.css'
import ContainerSmall from '../atons/container/ContainerSmall'
import Buttoncall from '../atons/buttons/Buttoncall'
import bannerfooter from '../../images/bannerfooter.jpg'

function Orcamento() {
    return (
        <section className={styles.orcamento}>
            <ContainerSmall>
                <h3>Venha fazer um orçamento</h3>
                <Buttoncall text={'Solicitar Orçamento'} href={'#'}/>
            </ContainerSmall>
            <img src={bannerfooter} alt='banner footer' />
        </section>
    )
}

export default Orcamento