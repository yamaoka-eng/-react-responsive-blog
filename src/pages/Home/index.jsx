import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IndexAnimatation } from '../../components'
import { AiOutlineArrowDown } from 'react-icons/ai'

import styles from './index.module.scss'

const Home = () => {
  const welcomeText = [
    "Welcome to Yamaoka's Personality blog.",
    "To read without reflecting is like eating without digesting.",
    "You can change your life if you want to.",
    "There is a kind of call to eat together."
  ]

  const mainRef = useRef()

  const [ dynamicWelconmeText, setDynamicWelconmeText ] = useState('')
  const [isCursorFlicker, setIsCursorFlicker] = useState(true)

  useEffect(() => {

    var index = 0

    var interval1
    var interval2

    const choseeWelcomeText = () => {
      if (index < welcomeText.length - 1) {
        index += 1
        return
      }
      index = 0
    }

    const clearWelcomeText = () => {
      interval1 = setInterval(() => {
        setDynamicWelconmeText((pre)=>{
          if (!pre) {
            clearInterval(interval1)
            setIsCursorFlicker(true)
            setTimeout(() => addWelcomeText(), 2000)
            return pre
          }
          setIsCursorFlicker(false)
          return pre.slice(0, pre.length-1)
        })
      }, 80)
    }

    const addWelcomeText = () => {
      interval2 = setInterval(() => {
        setDynamicWelconmeText((pre)=>{
          setIsCursorFlicker(false)
          if (!pre) return welcomeText[index][0]
          if (pre.length < welcomeText[index].length) return pre + welcomeText[index][pre.length]
          choseeWelcomeText()
          clearInterval(interval2)
          setIsCursorFlicker(true)
          setTimeout(() => clearWelcomeText(), 5000)
          return pre
        })
      }, 200)
    }

    addWelcomeText()

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [])

  useEffect(()=> {
    const element = mainRef.current;
    gsap.fromTo(
      element,
      {
        visibility: 'hiden',
        opacity: 0,
        y: 70,
        duration: 1
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "start center"
        }
      }
    );
  }, [])

  return (
    <div className={styles.homeContainer} >
      <div className={styles.homeBg}>
        <IndexAnimatation/>
        <div className={styles.welcomeText}>
          {dynamicWelconmeText}
          <span className={`text-2xl ${isCursorFlicker && styles.cursorFlicker}`}>|</span>
        </div>
        <div className={`${styles.previewOverlay} absolute bottom-2`}>
          <svg className={styles.previewWaves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g className={styles.previewParallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="var(--gentle-wave1)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="var(--gentle-wave2)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="var(--gentle-wave3)"></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="var(--gentle-wave)"></use>
            </g>
          </svg>
        </div>
        <a href='#main' className={styles.down}><AiOutlineArrowDown/></a>
      </div>
      <main className={styles.main} id='main' ref={mainRef}>
        <div className={styles.fullbar}>BBBBBBBBBBBBBBBBBBBBBBBBBBB</div>
        <div className={styles.longbar}>CCBBBBBBBBBC</div>
        <div className={styles.shortbar}>DBBBBBBBBBDD</div>
        <div className={styles.shortbar}>EEBBBBBBBBBBBBBBBBBBBBBE</div>
        <div className={styles.longbar}>FBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBFF</div>
      </main>
    </div>
  )
}

export default Home
