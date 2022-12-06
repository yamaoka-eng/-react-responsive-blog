import { useState, useEffect, useRef } from 'react'
import { AiOutlineDown } from "react-icons/ai"
import styles from './index.module.scss'

const Nav = () => {
  const [ showTags, setShowTags ] = useState(false)
  const [ showDown, setShowDown ] = useState(false)

  const categoriesRef = useRef()

  useEffect(()=>{
    const timer = setInterval(() => {
      const element = categoriesRef.current
      const categoriesWidth = element.offsetWidth
      var childsWidth = 0
      Array.prototype.slice.call(element.childNodes).map(item => {
        childsWidth += item.offsetWidth
        childsWidth += Number(window.getComputedStyle(item, null).marginLeft.replace(/px/, ""))
        childsWidth += Number(window.getComputedStyle(item, null).marginRight.replace(/px/, ""))
      })
      if (childsWidth > categoriesWidth) {
        setShowDown(true)
      } else {
        setShowDown(false)
      }
    }, 500);
    return () => clearInterval(timer)
  }, [])

  return (
    <ul className={`${styles.categories} ${showTags ? 'max-h-[30rem]' : 'max-h-[4rem]'}`} ref={categoriesRef}>
      <li>All</li>
      <li><span>React</span><span>3</span></li>
      <li><span>Vue</span><span>4</span></li>
      <li><span>echarts</span><span>4</span></li>
      <li><span>elementUI</span><span>1</span></li>
      <li><span>Ant Design</span><span>1</span></li>
      <li><span>React</span><span>3</span></li>
      <li><span>Vue</span><span>4</span></li>
      <li><span>echarts</span><span>4</span></li>
      <div className={`absolute right-4 cursor-pointer transition-all duration-300 ${showTags ? 'rotate-180' : 'rotate-0'} ${showDown ? '' : 'hidden'}`} onClick={()=>setShowTags(!showTags)}><AiOutlineDown fontSize={'1.1rem'}/></div>
    </ul>
  )
}

export default Nav
