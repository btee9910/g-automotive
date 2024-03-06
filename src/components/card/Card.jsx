import Button from "../Button";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";

const Card = (props) => {

    const handleCLick = (e) => {
        e.preventDefault();
        props.setLoadedCard(props.cardKey);
    }

    return (
        <div className={`card-layout ${props.cardKey==props.loadedCard? 'on-load' : ''}`}>
            {/* Card Image */}
            <CardImage link={props.imageLink} alt={props.alt} />

            {/* Card Content layout */}
            <div className="card-content">
                <CardHeader header={props.header} />
                <CardBody body={props.body} />

                <div className="card-button">
                    <Button handleClick={handleCLick} context={props.buttonContext} link={props.buttonLink} />
                </div>
            </div>
        </div>
    );
}

export default Card;