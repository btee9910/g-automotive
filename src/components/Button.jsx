const Button = (props) => {
    return ( 
        <a onClick={props.handleClick} href={props.link} className="btn">
            {props.context}
        </a>
     );
}
 
export default Button;  