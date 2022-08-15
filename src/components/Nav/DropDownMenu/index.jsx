import { Link } from "react-router-dom"

const DropDownMenu = ({goTo}) => {

    return (
        <div className="drop-down-menu z-4 lg-hidden-h width-full collapse-menu" id="dropDownMenu">
            <div className="width-full height-full bg-main">
                <Link to="/" className="nav-link lg-text-xl width-full hover-text-white text-light" id='lawyer' onClick={(event) => {event.preventDefault(); goTo('/');}}>Viviane PETIT</Link>
                <Link to="lawyer-fields" className="nav-link lg-text-xl width-full hover-text-white text-light" id='lawyer-fields' onClick={(event) => {event.preventDefault(); goTo('lawyer-fields')}}>Expertises</Link>
                <Link to="contact" className="nav-link lg-text-xl width-full hover-text-white text-light" id='contact' onClick={(event) => {event.preventDefault(); goTo('contact')}}>Contact</Link>
                <Link to="articles" className="nav-link lg-text-xl width-full hover-text-white text-light" id='articles' onClick={(event) => {event.preventDefault(); goTo('articles')}}>Articles</Link>
            </div>
        </div>   
    )
}

export default DropDownMenu