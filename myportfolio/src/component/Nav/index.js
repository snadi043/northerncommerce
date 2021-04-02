import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    // const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

//   const handleClose = () => {
//     if (screenWidth < 600) {
//       setOpen(false);
//     }
//   };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

    return (
        <nav className="NavBar"> 
            <div className="navWrapper">
            <div className="logo">
                <Link to="/">
                    <img 
                    src="sh.jpg"
                    alt = "BRAND" />
                </Link>
                </div>
            <div className="list-wrapper">
                    <img
                        src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
                        alt="Menu bars"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick = {() => {
                            setOpen(!open);
                        }}
                        
                        
                    />
                    <img
                        src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
                        alt="Menu cross"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick = {
                            () => {
                                setOpen(!open);
                            }
                        }
                        
                    />

                <ul style={{left: open ? "0" : "-100vw"}}>
                    <li>< Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT ME</Link></li>
                    <li><Link to="/skills">SKILLS</Link></li>
                    <li><Link to="/work">WORK</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                
            </div>
            </div>
        </nav>
    );
}

export default Nav;
