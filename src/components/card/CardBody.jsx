const CardBody = (props) => {
    return (
        <div className="card-body">
            {/* Seperate paragraph in array if any */}
            {props.body.map((para, i) => {
                return (
                    <span key={i}>{para}</span>
                )
            })}
        </div>
    );
}

export default CardBody;