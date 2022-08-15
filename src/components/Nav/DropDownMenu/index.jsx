import { Link } from "react-router-dom"

const DropDownMenu = ({goTo, JwtUser, playSound}) => {

    return (
        <div className="drop-down-menu z-4 lg-hidden-h width-full collapse-menu" id="dropDownMenu">
            <div className="width-full height-full bg-main">
                <Link to="/" className={`lg-text-xl width-full hover-text-white text-light ${JwtUser ? "nav-link-purple" : "nav-link"}`} id='lawyer' onClick={(event) => {event.preventDefault(); goTo('/');}} onMouseEnter={playSound}>Viviane PETIT</Link>
                <Link to="lawyer-fields" className={`lg-text-xl width-full hover-text-white text-light ${JwtUser ? "nav-link-purple" : "nav-link"}`} id='lawyer-fields' onClick={(event) => {event.preventDefault(); goTo('lawyer-fields');}} onMouseEnter={playSound}>Expertises</Link>
                <Link to="contact" className={`lg-text-xl width-full hover-text-white text-light ${JwtUser ? "nav-link-purple" : "nav-link"}`} id='contact' onClick={(event) => {event.preventDefault(); goTo('contact');}} onMouseEnter={playSound}>Contact</Link>
                <Link to="articles" className={` lg-text-xl width-full hover-text-white text-light ${JwtUser ? "nav-link-purple" : "nav-link"}`} id='articles' onClick={(event) => {event.preventDefault(); goTo('articles');}} onMouseEnter={playSound}>Articles</Link>
            </div>
        </div>   
    )
}

export default DropDownMenu