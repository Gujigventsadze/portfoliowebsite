import "../styles/Skills.css";
import htmlImg from "../assets/htmllogo-removebg-preview.png";
import cssImg from "../assets/csslogoo-removebg-preview.png";
import jsImg from "../assets/jslogo.png";
import reactImg from "../assets/reactlogo-removebg-preview.png";
import nodeImg from "../assets/nodejslogo-removebg-preview.png";
import expressImg from "../assets/express.png";
import postgreImg from "../assets/postgresqllogo.png";
import muiImg from "../assets/materialuilogo-removebg-preview.png";
import tsImg from "../assets/tslogo.png";

const Skills = () => {
    return (
        <section id="skills">
            <h2>Languages I work With</h2>
            <div className="skills">
                <div className="skills-slide">
                    <img src={htmlImg} />
                    <img src={cssImg} />
                    <img src={jsImg} />
                    <img src={tsImg} />
                    <img src={reactImg} />
                    <img src={nodeImg} />
                    <img src={expressImg} />
                    <img src={postgreImg} />
                    <img src={muiImg} />
                </div>
                <div className="skills-slide">
                    <img src={htmlImg} />
                    <img src={cssImg} />
                    <img src={jsImg} />
                    <img src={tsImg} />
                    <img src={reactImg} />
                    <img src={nodeImg} />
                    <img src={expressImg} />
                    <img src={postgreImg} />
                    <img src={muiImg} />
                </div>
            </div>
        </section>
    )
}

export default Skills;