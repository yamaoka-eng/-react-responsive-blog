import { useRef, useEffect } from 'react'

import { index_fullScreenAnimation } from '../../utils'

import styles from './index.module.scss'

const IndexAnimatation = () => {

  const canvasRef = useRef()

  useEffect(() => index_fullScreenAnimation(canvasRef.current), [])

  return <canvas className={styles.canvas} ref={canvasRef}></canvas>
}

export default IndexAnimatation
