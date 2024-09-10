import "../styles/ProjectCards.css";

const ProjectCards = (props) => {
    return (
        <div className="project-card">
            <img src={props.image} />
            <div className="texts">
                <h3>{props.header}</h3>
                <p>{props.text}</p>
            </div>
                <a className="arrow" href={props.url} target="_blank">View Full Code &#8594;</a>
        </div>
    )
}

export default ProjectCards;