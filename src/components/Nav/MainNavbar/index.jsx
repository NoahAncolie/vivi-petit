import { Link } from "react-router-dom"

const DropDownMenu = ({goTo, toggle}) => {

    return (
        <div className="drop-down-menu z-4 lg-hidden-h width-full collapse-menu" id="dropDownMenu">
            <div className="width-full">
                <Link to="lawyer" className="nav-link lg-text-xl width-full link-text-black hover-text-white" id='lawyer' onClick={(event) => {event.preventDefault(); goTo('lawyer');}} onMouseEnter={toggle}>Viviane PETIT</Link>
                <Link to="lawyer-fields" className="nav-link lg-text-xl width-full link-text-black hover-text-white" id='lawyer-fields' onClick={(event) => {event.preventDefault(); goTo('lawyer-fields')}} onMouseEnter={toggle}>Expertises</Link>
                <Link to="contact" className="nav-link lg-text-xl width-full link-text-black hover-text-white" id='contact' onClick={(event) => {event.preventDefault(); goTo('contact')}} onMouseEnter={toggle}>Contact</Link>
                <Link to="articles" className="nav-link lg-text-xl width-full link-text-black hover-text-white" id='articles' onClick={(event) => {event.preventDefault(); goTo('articles')}} onMouseEnter={toggle}>Articles</Link>
            </div>
        </div>   
    )
}

export default DropDownMenu