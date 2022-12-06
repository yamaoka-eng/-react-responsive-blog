import { useState, useEffect, useRef } from 'react'
import { getLocalImage } from '../../../../utils'
import styles from './index.module.scss'

const Star = () => {

  const starRef = useRef()
  const supeRef = useRef()

  useEffect(()=>{

    const toMove = ({ clientX, clientY }) => {
      let { x, y } = { x: (document.body.offsetWidth / 2 - clientX) / 15, y: clientY / 15 }
      starRef.current.style.transform = `translate(${x}px, ${-y}px)`
      supeRef.current.style.transform = `translate(${-x}px, ${y}px)`
    }

    window.addEventListener('mousemove', toMove)
    return () => window.removeEventListener('mousemove', toMove)
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.starBg}>
        <div className={styles.star}>
          <img ref={starRef} style={{ transform: 'translate(0, 0)' }} className='w-full h-full' src={getLocalImage('star.png')} alt="" />
        </div>
        <div className={styles.supe}>
          <img ref={supeRef} style={{ transform: 'translate(0, 0)' }} className='w-full h-full' src={getLocalImage('supe.png')} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Star
