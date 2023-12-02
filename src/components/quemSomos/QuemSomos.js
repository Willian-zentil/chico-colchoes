import React from 'react'
import disney from '../../images/disney-apresentou.jpg'
import styles from './QuemSomos.module.css'
import ContainerSmall from '../atons/container/ContainerSmall'

function QuemSomos() {
    return (
        <section className={styles.quemSomos}>
            <ContainerSmall>
                <img className={styles.imgQuemSomos} src={disney} alt='imagem quem somos' />
                <div>
                    <h3>Um pouco Sobre nossa Historia</h3>
                    <p>Morbi vitae rutrum eros. Nulla semper justo at lacus elementum malesuada. Curabitur et felis vel lorem lacinia pretium vitae quis nisi. Sed fringilla elit mi, nec tristique lectus dictum id. Quisque rhoncus dolor maximus sapien dictum, quis dapibus sapien mollis. Integer molestie, est ac eleifend eleifend, dolor erat ultrices orci, fringilla feugiat diam ipsum vitae sem. Proin commodo sit amet mauris at ullamcorper Vivamus volutpat elementum urna imperdiet imperdiet.Morbi vitae rutrum eros. Nulla semper justo at lacus elementum malesuada. Curabitur et felis vel lorem lacinia pretium vitae quis nisi. Sed fringilla elit mi, nec tristique lectus dictum id. Quisque rhoncus dolor maximus sapien dictum, quis dapibus sapien mollis. Integer molestie, est ac eleifend eleifend, dolor erat ultrices orci, fringilla feugiat diam ipsum vitae sem. Proin commodo sit amet mauris at ullamcorper. Mauris tincidunt dictum tellus, quis lacinia augue volutpat sed. Suspendisse quis lectus non nibh maximus rutrum. Morbi elit nisi, ultricies in quam in, imperdiet cursus libero. Vivamus volutpat elementum urna imperdiet imperdiet.</p>
                </div>
            </ContainerSmall>
        </section>
    )
}

export default QuemSomos