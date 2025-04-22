import HobbyCard from "./HobbyCard";

function HobbyGallery(props) {
    return (
        <div className="hobby-gallery">
            {props.hobbies.map((hobby, index) => (
                <div key={index}>
                    <HobbyCard name={hobby.name} description={hobby.description} materials={hobby.materials} />
                </div>
            ))}
        </div>
    )
}

export default HobbyGallery;