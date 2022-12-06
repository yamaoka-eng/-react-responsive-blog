import React from 'react'
import { CarouselCards } from '../../components'
import { getLocalImage } from '../../utils'
import styles from './index.module.scss'

const Card = () => {

  return (
    <div className="flex md:flex-row flex-col justify-between md:justify-start bg-white rounded-lg overflow-hidden">
      <div className="flex-none md:w-48 md:h-auto h-40 relative">
        <img src={getLocalImage('NFTArt.png')} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="md:w-[25rem] md:flex-1 flex-col p-6">
        <div className="flex flex-col">
          <div className="text-xl font-semibold text-gray-500">
            基于React框架
          </div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            使用 Tailwindcss 实现响应式页面
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6">
          <div className="ml-auto text-sm text-gray-500 underline">CSS3动画</div>
        </div>
        <div className="flex space-x-3 mb-4 text-sm font-medium">
          <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
            <svg className="hover:text-red-500" width="20" height="20" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500">
          源码已在Github开放, 若喜欢可以点击小爱心去查看
        </p>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className='min-h-[100vh] pb-4 pt-[5rem]'>
      <CarouselCards/>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={`${styles.coolTitle} cool-title`}><code>WHO AM I</code></div>
          <div className='flex flex-col lg:flex-row'>
            <div className={styles.personalBg}>
              <Card/>
            </div>
            <div>
              <p>
                欢迎来到我的博客, 我是<strong>Yamaoka</strong><br />
                喜欢专研前端 Vue React, 和混合APP开发<br />
                坚持创作并开源高性能多特效的功能组件<br />
              </p>
              <p>
                追求极致, 追求完美, 喜欢一个高效, 优雅, 高凝聚力的团队<br />
                立志于打造最优秀的产品, 成为一名既优雅而有深度的技术人才
              </p>
            </div>
          </div>
          <hr />
          <p className='text-2xl'>
            <span className='text-gradient'>
              Never stop learning
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
