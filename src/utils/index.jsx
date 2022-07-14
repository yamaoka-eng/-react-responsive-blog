import { lazy, Suspense, useState, useEffect, useRef } from 'react'
import styles from './index.module.scss'

export { default as index_fullScreenAnimation } from './index_fullScreenAnimation'

const LoadingImage = ({ style }) => {
  return (
    <div className={styles.lodingSupe} style={style}>
      <img src={getImage('BGsupe.png')}/>
    </div>
  )
}

export const lazyLoad = component => {
  const LazyComponent = lazy(component)
  return (
    <Suspense fallback={
      <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center text-3xl'><span className='animate-pulse'>Loading</span><LoadingImage style={{ width: '7rem', height: '3.3rem' }}/></div>
    }>
      <LazyComponent />
    </Suspense>
  )
}

export const getImage = imgUrl => new URL(`/src/assets/${imgUrl}`, import.meta.url).href

export const PrestrainLocalImg = ({ imgUrl }) => {
  const [loadingOk, setLoadingOk] = useState(false)

  useEffect(()=>{
    var image = new Image()
    image.src = getImage(imgUrl)
    image.onload = () => setLoadingOk(true)
  }, [])

  return ( loadingOk ? <img className="h-full w-full" src={getImage(`${imgUrl}`)} alt="" /> : <div className="h-full w-full animate-pulse bg-slate-200"></div> )
}

export const LazyImage = ({ imgUrl, style }) => {

  const divRef = useRef()

  const [loadingOk, setLoadingOk] = useState(false)

  useEffect(()=>{
    const observer = new IntersectionObserver ( entries => {
      entries.forEach(item => {
        if (item.intersectionRatio <= 0) return
        var image = new Image()
        image.src = getImage(imgUrl)
        image.onload = () => setLoadingOk(true)
      })
    }, { threshold: [ 0.1 ] })
    observer.observe(divRef.current)
  }, [])

  return (
    loadingOk ? <img className="h-full w-full bg-cover" style={style} src={getImage(`${imgUrl}`)} alt="" /> : <div ref={divRef} className="h-full w-full  "><LoadingImage/></div>
  )
}
