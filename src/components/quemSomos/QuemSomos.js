import React from 'react'
import banner from '../../images/colchao.png'
import styles from './QuemSomos.module.css'
import ContainerSmall from '../atons/container/ContainerSmall'

function QuemSomos() {
    return (
        <section className={styles.quemSomos}>
            <ContainerSmall>
                <img className={styles.imgQuemSomos} src={banner} alt='imagem quem somos' />
                <div>
                    <h3>Linha Infinity</h3>
                    <p>– Magnético</p>

                    <p>  – Infra vermelho Longo</p>

                    <p> – Densidade Progressiva</p>

                    <p>  – Camada Soft Extra conforto</p>

                    <p>  – Camada Soft Extra no tampo (especial alto relevo)</p>

                    <p>  – Pillow top Europeu</p>

                    <p> – Desing visual Exclusivo</p>

                    <p>  – Tecidos com tratamento especial</p>

                    <p>  – Anti Alérgico</p>

                    <p>  – Anti Ácaros</p>

                    <p>   – Garantia 12 anos.</p>
                </div>
            </ContainerSmall>
        </section>
    )
}

export default QuemSomos