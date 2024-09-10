import "../styles/About.css";
import astronautImg from "../assets/astronaut.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TypeAnimation } from "react-type-animation";
   


const About = () => {
    return (
        <div className="about-container">
            <div className="left-side">
                <div className="welcome">
                    Hello, I am Elguja. 
                    <p>
                        <TypeAnimation className="type-animation"
                        sequence={[
                           'I am a Web Developer',
                           5000,
                           'I am a Full-stack developer',
                           5000,
                        ]}
                        wrapper="span"
                        speed={1}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        />
                    </p>
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/guji-gventsadze-95b214327/" target="_blank">
                        <LinkedInIcon style={{fontSize: '2.5rem'}} />
                    </a>
                    <a href="https://github.com/Gujigventsadze" target="_blank">
                        <GitHubIcon style={{fontSize: '2.5rem'}} />
                    </a>
                    <a href="https://www.facebook.com/guji.gvencadze" target="_blank">
                        <FacebookIcon style={{fontSize: '2.5rem'}} />
                    </a>
                </div>
            </div>
            <div className="right-side">
                <img className="astro-img" src={astronautImg} />
            </div>
        </div>
    )
}

export default About;