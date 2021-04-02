
import {Link} from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="Title">
                <h1>
                    <p>HELLO...</p>
                    <p>I am SAI HARNADH</p> 
                    <p>| Web Developer | Front End Developer |</p>
                </h1>
                <Link to="/about">
                    <button>More About Me</button>
                </Link>
            </div>
            <div className="Person">
                <img src="burger-logo.png" alt="MY PICTURE"/>
            </div>
            
        </div>
    );
};

export default Home;
