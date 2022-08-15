import { Link } from "react-router-dom"

const DropUpMenu = ({goTo, invertArrows}) => {

    return (
        <div className="drop-up-menu z-4 width-full md-hidden-h sm-hidden-h collapse-down-menu bg-main" id="dropUpMenu">
            <div className="width-full lg-title-xl">
                <div className="width-full text-center nav-spacing">
                    <Link to="lawyer" className="nav-link-small text-light" id='lawyer' onClick={(event) => {event.preventDefault(); goTo('/'); invertArrows()}}>Viviane PETIT</Link>
                </div>
                <div className="width-full text-center nav-spacing">
                    <Link to="lawyer-fields" className="nav-link-small text-light" id='lawyer-fields' onClick={(event) => {event.preventDefault(); goTo('lawyer-fields'); invertArrows()}}>Expertises</Link>
                </div>
                <div className="width-full text-center nav-spacing">
                    <Link to="contact" className="nav-link-small text-light" id='contact' onClick={(event) => {event.preventDefault(); goTo('contact'); invertArrows()}}>Contact</Link>
                </div>
                <div className="width-full text-center nav-spacing">
                    <Link to="articles" className="nav-link-small text-light" id='articles' onClick={(event) => {event.preventDefault(); goTo('articles'); invertArrows()}}>Articles</Link>
                </div>
            </div>
        </div>   
    )
}

export default DropUpMenu