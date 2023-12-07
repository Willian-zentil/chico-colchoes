import React from 'react'
import styles from './Servicos.module.css'
import ContainerSmall from '../atons/container/ContainerSmall'
import serviceOne from '../../images/pulseira.jpeg'
import serviceTwo from '../../images/travesseiro.jpg'
import serviceThree from '../../images/colchao.png'



function Servicos() {
    return (
        <section id={'servicos'} className={styles.servicos}>
            <ContainerSmall>
                <div className={styles.servico}>
                    <div className={styles.containerImg}>
                        <img src={serviceOne} alt='serviço' />
                    </div>
                    <h4>Pulseiras</h4>
                    <p>
                        auxilia na melhor curculação sanguínea, tensões musculares, retenção de líquidos, entre outros</p>
                </div>
                <div className={styles.servico}>
                    <div className={styles.containerImg}>
                        <img src={serviceTwo} alt='serviço' />
                    </div>
                    <h4>Travesseiro Magnético</h4>
                    <p>Descubra o Conforto e Bem-Estar com o Travesseiro Magnético Infravermelho e Camada Soft Confort: Uma Noite de Sono Revitalizante!</p>
                </div>
                <div className={styles.servico}>
                    <div className={styles.containerImg}>
                        <img src={serviceThree} alt='serviço' />
                    </div>
                    <h4>colchão terapêutico</h4>
                    <p>Nosso Colchão Magnético combina uma série de características inovadoras para oferecer não apenas um sono profundo, mas também benefícios para o seu bem-estar.</p>
                </div>
                <div className={styles.servico}>
                    <div className={styles.containerImg}>
                        <img src={serviceOne} alt='serviço' />
                    </div>
                    <h4>encosto</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a justo nec tellus tempus dictum. Nam imperdiet a lacus nec tincidunt</p>
                </div>
            </ContainerSmall>
            <h3>Um bom colchão terapêutico transforma seu sono em bem-estar.</h3>
        </section>
    )
}

export default Servicos