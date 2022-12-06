import { Routes, Route } from 'react-router-dom'

import { Header, Footer } from './components'
import { lazyLoad } from './utils'

const Home = () => import('./pages/Home')
const Archives = () => import('./pages/Archives')
const Article = () => import('./pages/Article')
const About = () => import('./pages/About')
const Tags = () => import('./pages/Tags')

import './App.scss'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={lazyLoad(Home)} />
        <Route path='/archives' element={lazyLoad(Archives)} />
        <Route path='/article' element={lazyLoad(Article)} />
        <Route path='/about' element={lazyLoad(About)} />
        <Route path='/tags' element={lazyLoad(Tags)} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
