const CardImage = (props) => {
    return ( 
        <div className="card-image">
            <img src={props.link? props.link : '../../../images/card-image.jpg'} alt={props.alt} />
        </div>
     );
}
 
export default CardImage;