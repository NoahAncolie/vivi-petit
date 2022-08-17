import { Link } from "react-router-dom"

const DropDownMenu = ({ toggle, JwtUser}) => {

    return (
        <div className="drop-down-menu z-4 lg-hidden-h width-full collapse-menu" id="dropDownMenu">
            <div className="vh-full bg-main">
                <div className="width-full bg-main">
                    <Link to="/" className={`lg-text-xl width-full hover-text-white text-light ${JwtUser ? "nav-link-purple" : "nav-link"}`} id='lawyer' onClick={toggle}>Viviane PETIT</Link>
                    <Link to="lawyer-fields" className={`lg-text-xl width-full hover-text-white text-light ${JwtUser ? "nav-link-purple" : "nav-link"}`} id='lawyer-fields' onClick={toggle}>Expertises</Link>
                    <Link to="contact" className={`lg-text-xl width-full hover-text-white text-light ${JwtUser ? "nav-link-purple" : "nav-link"}`} id='contact' onClick={toggle}>Contact</Link>
                    <Link to="articles" className={` lg-text-xl width-full hover-text-white text-light ${JwtUser ? "nav-link-purple" : "nav-link"}`} id='articles' onClick={toggle}>Articles</Link>
                </div>
            </div>
        </div>
    )
}

export default DropDownMenu