import React from 'react'
import styles from './Servicos.module.css'
import ContainerSmall from '../atons/container/ContainerSmall'
import serviceOne from '../../images/service1.png'

function Servicos() {
  return (
    <section className={styles.servicos}>
        <ContainerSmall>
            <div className={styles.servico}>
                <div className={styles.containerImg}>
                    <img src={serviceOne} alt='serviço' />
                </div>
                <h4>Serviço Um</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a justo nec tellus tempus dictum. Nam imperdiet a lacus nec tincidunt</p>
            </div>
            <div className={styles.servico}>
                <div className={styles.containerImg}>
                    <img src={serviceOne} alt='serviço' />
                </div>
                <h4>Serviço dois</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a justo nec tellus tempus dictum. Nam imperdiet a lacus nec tincidunt</p>
            </div>
            <div className={styles.servico}>
                <div className={styles.containerImg}>
                    <img src={serviceOne} alt='serviço' />
                </div>
                <h4>Serviço tres</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a justo nec tellus tempus dictum. Nam imperdiet a lacus nec tincidunt</p>
            </div>
            <div className={styles.servico}>
                <div className={styles.containerImg}>
                    <img src={serviceOne} alt='serviço' />
                </div>
                <h4>Serviço quatro</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a justo nec tellus tempus dictum. Nam imperdiet a lacus nec tincidunt</p>
            </div>
        </ContainerSmall>
        <h3>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</h3>
    </section>
  )
}

export default Servicos