import React from 'react'
import styles from './index.module.scss'

const Tags = () => {
  return (
    <div className='p-4 pt-[5rem] w-full min-h-[100vh]'>
      <p className={styles.tagTitle}>TAGS</p>
      <ul className={styles.tags}>
        <li><span><span># </span>React</span><span>3</span></li>
        <li><span><span># </span>vue</span><span>3</span></li>
        <li><span><span># </span>erchats</span><span>3</span></li>
        <li><span><span># </span>element ui</span><span>3</span></li>
        <li><span><span># </span>Ant Design</span><span>3</span></li>
      </ul>
    </div>
  )
}

export default Tags
