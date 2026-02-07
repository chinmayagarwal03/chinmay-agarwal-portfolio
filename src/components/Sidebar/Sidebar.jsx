import "./Sidebar.css"
import { FaInstagram } from "react-icons/fa"

const Sidebar = () => {
  return (
    <aside className='sidebar'>

    <div className='sidebar-top'>
        <div className='sidebar-logo'>Chinmay.</div>

      <nav className='sidebar-nav'>
        <a href='#home'>HOME</a>
        <a href='#about'>ABOUT</a>
        <a href='#work'>WORK</a>
        <a href='#contact'>CONTACT</a>
      </nav>
    </div>
      
    <div className="sidebar-bottom">
        <div className="sidebar-social">
          <a
            href="https://instagram.com/agarwal.chinmay"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="sidebar-footer">
          © 2026 Chinmay Agarwal. All rights reserved
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
