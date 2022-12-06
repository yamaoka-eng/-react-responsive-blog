import React from 'react'
import './index.scss'

const Archives = () => {
  return (
    <div className='p-4 pt-[5rem]'>
      <div className='content'>
        <ul className="timeline timeline-centered">
          <li className="timeline-item period">
            <div className="timeline-info"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h2 className="timeline-title">2022</h2>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-info">
              <span>08-15</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-title"><a>如何高效学习Vue</a></h3>
              <p>如何高效学习Vue如何高效学习Vue如何高效学习Vue如何高效学习Vue如何高效学习Vue如何高效学习Vue</p>
            </div>
          </li>
          <li className="timeline-item period">
            <div className="timeline-info"></div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h2 className="timeline-title">2021</h2>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-info">
              <span>08-14</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-title"><a>如何高效学习React</a></h3>
              <p>如何高效学习React如何高效学习React</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-info">
              <span>08-14</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-title"><a>如何高效学习React</a></h3>
              <p>如何高效学习React如何高效学习React</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Archives
