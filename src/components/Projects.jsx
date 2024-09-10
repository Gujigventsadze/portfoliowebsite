import "../styles/Projects.css";
import ProjectCards from "./ProjectCards";
import eComImg from "../assets/e-commerce.png";
import chatAppImg from "../assets/chat-app.png";
import regPage from "../assets/registration-page.png";
import itImg from "../assets/itproj.png";

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-title">
                MY PROJECTS
            </div>
            <div className="projects-container">
                <ProjectCards 
                image={eComImg}
                header="E-Commerce Website"
                text="Built this Website with inspiration for it to be flashy and eye-catching for the user, while keeping the intuitive design."
                url="https://github.com/Gujigventsadze/Capstone-Projects/tree/main/E-commerce"
                />
                <ProjectCards
                image={chatAppImg}
                header="Chat Application"
                text="Built ChatApp with Chatengine, has functionality to add new people, see whether sent message was seen or not and etc."
                url="https://github.com/Gujigventsadze/Capstone-Projects/tree/main/ChatApp"
                />
                <ProjectCards
                image={regPage}
                header="Registration/Login Page"
                text="Simple login page built with React for UI and NodeJS for server side. Used bcrypt for hashing and storing data in postgreSQL database."
                url="https://github.com/Gujigventsadze/Capstone-Projects/tree/main/LoginProject"
                />
                <ProjectCards
                image={itImg}
                header="IT Website"
                text="Built simple landing page for IT website. Utilized colors that would best match the theme"
                url="https://github.com/Gujigventsadze/Capstone-Projects/tree/main/itweb"
                />
            </div>
            <div className="full-list-button">
                <a href="https://github.com/Gujigventsadze/Capstone-Projects" target="_blank">
                    <button>See Full List</button>
                </a>
            </div>
        </section>
    )
}


export default Projects;