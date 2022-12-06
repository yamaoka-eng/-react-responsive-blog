import { useState, useRef, useEffect } from 'react'
import { AiTwotoneFileText } from "react-icons/ai"
import { LazyImage } from '../../utils'
import Nav from './components/Nav'
import Star from './components/Star'
import styles from './index.module.scss'

const articles = [
  { id: 1, name: '技术', count: 4 },
  { id: 2, name: '技术', count: 4 },
  { id: 3, name: '技术', count: 4 },
  { id: 4, name: '技术', count: 4 },
  { id: 5, name: '技术', count: 4 },
]

const Article = () => {

  return (
    <>
    <Star />
    <div className='p-4 mt-[-1rem] w-full min-h-[100vh]'>
      <div className='cool-title flex items-center mt-4 mb-8 text-2xl'><AiTwotoneFileText/><span className='ml-2'>文章</span></div>
      <Nav />
      <ul className={styles.container}>
        { articles.map(item => (<li key={item.id} className={styles.card}>
          <div className={styles.front}>
            <span>{item.name}</span>
            <div className='h-40 w-80'>
              <LazyImage imgUrl='https://tse4-mm.cn.bing.net/th/id/OIP-C.X8xjJfGojS4WFuIhgj37jwHaHa?pid=ImgDet&rs=1'/>
            </div>
          </div>
          <div className={styles.back}>
            <span>文章数：{item.count}</span>
          </div>
        </li>)) }
      </ul>
    </div>
    </>
  )
}

export default Article
