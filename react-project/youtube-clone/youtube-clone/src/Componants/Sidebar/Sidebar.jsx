import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game from '../../assets/game_icon.png'
import automibiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainmanets from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import  simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="shortcut-links">
        <div className="side-links">
          <img src={home}/><p>Home</p>
        </div>
        <div className="side-links">
          <img src={game}/><p>Games</p>
        </div>
        <div className="side-links">
          <img src={automibiles}/><p>Automobiles</p>
        </div>
        <div className="side-links">
          <img src={sports}/><p>Sports</p>
        </div>
        <div className="side-links">
          <img src={entertainmanets}/><p>mojo</p>
        </div>
        <div className="side-links">
          <img src={tech}/><p>Tech</p>
        </div>
        <div className="side-links">
          <img src={music}/><p>Music</p>
        </div>
        <div className="side-links">
          <img src={blogs}/><p>Blogs</p>
        </div>
        <div className="side-links">
          <img src={news}/><p>News</p>
        </div>
        <hr/>
      </div>
      <div className="subscribe-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack}/> <p>pweDipie</p>
        </div>
        <div className="side-link">
          <img src={simon}/> <p>mrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom}/> <p>justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan}/> <p>5-minute Craft</p>
        </div>
        <div className="side-link">
          <img src={cameron}/> <p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar