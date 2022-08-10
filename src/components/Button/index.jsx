const Button = (props) => {

    const Activate = () => {
        props.buttonFunction()
    }

    return (
        <div className={`button ${props.classNames}`} onClick={props.buttonFunction}>
            {props.name}
        </div>
    )
}

export default Button