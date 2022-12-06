import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AiFillHome, AiTwotoneFileText, AiOutlineDropbox, AiTwotoneTag, AiOutlineUser, AiFillGithub, AiOutlineDoubleRight, AiFillGoogleCircle } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import styles from './index.module.scss'

const Header = () => {

  gsap.registerPlugin(ScrollTrigger)
  const headerEl = useRef()

  useEffect(()=>{
    const element = headerEl.current
    gsap.to(element, {
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
      background: 'rgba(0,0,0,0.4)',
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })
  }, [])

  return (
    <>
      <header className={styles.headerContainer} ref={headerEl}>
        <div className={styles.mobile}>
          <input type="checkbox" className={styles.checkbox} id='toggle'/>
          <label for='toggle' className={styles.navBtn}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </label>
          <div className={styles.mobileNavContainer}>
            <label for='toggle' className='absolute top-0 left-0 w-full h-full z-[55]'></label>
            <div className={styles.mobileNav}>
              <div className={styles.navContainer}>
                <ul className={styles.nav}>
                  <li><Link to="/"><AiFillHome/><span>首页</span><AiOutlineDoubleRight/></Link></li>
                  <li><Link to="/archives"><AiOutlineDropbox/><span>归档</span><AiOutlineDoubleRight/></Link></li>
                  <li><Link to="/article"><AiTwotoneFileText/><span>文章</span><AiOutlineDoubleRight/></Link></li>
                  <li><Link to="/tags"><AiTwotoneTag/><span>标签</span><AiOutlineDoubleRight/></Link></li>
                  <li><Link to="/about"><AiOutlineUser/><span>关于</span><AiOutlineDoubleRight/></Link></li>
                </ul>
                <ul className={styles.link}>
                  <li><a href="https://github.com/yamaoka-eng" target='_blank'><AiFillGithub/><span>Github 作者主页</span></a></li>
                  <li><a href="https://greensock.com/gsap/" target='_blank'><AiFillGoogleCircle color='#4ade80'/><span>Gsap 友情链接</span></a></li>
                  <li><a href="https://react.docschina.org/" target='_blank'><FaReact color='#3b82f6'/><span>React 友情链接</span></a></li>
                  <li><a href="https://tailwindcss.com" target='_blank'><SiTailwindcss color='#7dd3fc'/><span>TailwindCSS 友情链接</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1>YamaokaBlog</h1>
        <ul>
          <li><Link to="/"><AiFillHome/><span>首页</span></Link></li>
          <li><Link to="/archives"><AiOutlineDropbox/><span>归档</span></Link></li>
          <li><Link to="/article"><AiTwotoneFileText/><span>文章</span></Link></li>
          <li><Link to="/tags"><AiTwotoneTag/><span>标签</span></Link></li>
          <li><Link to="/about"><AiOutlineUser/><span>关于</span></Link></li>
        </ul>
        <div className='text-xl tracking-[.25em] cursor-pointer md:hidden'>...</div>
      </header>
    </>
  )
}

export default Header
