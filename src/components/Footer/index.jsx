import React from 'react'
import { PrestrainLocalImg } from '../../utils'
import styles from './index.module.scss'

const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className='h-10'>
          <PrestrainLocalImg imgUrl='03-sushi.png'/>
        </div>
        <div className={styles.text}>
          <div className={styles.support}>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>TailWindCss</li>
              <li>Gsap</li>
            </ul>
          </div>
            <span className={styles.copyright}>Copyright © 2022 <span className={styles.rotate}>YamaoKa</span></span>
        </div>
      </footer>
  )
}

export default Footer
