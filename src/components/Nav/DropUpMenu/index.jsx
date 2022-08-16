import { Link } from "react-router-dom"

const DropUpMenu = ({toggleDropUp, invertArrows}) => {

    return (
        <div className="drop-up-menu z-4 width-full md-hidden-h sm-hidden-h collapse-down-menu bg-main" id="dropUpMenu">
            <div className="width-full lg-title-xl">
                <div className="width-full text-center nav-spacing">
                    <Link to="/" className="nav-link-small text-light" id='lawyer' onClick={(event) => {toggleDropUp(); invertArrows()}}>Viviane PETIT</Link>
                </div>
                <div className="width-full text-center nav-spacing">
                    <Link to="lawyer-fields" className="nav-link-small text-light" id='lawyer-fields' onClick={(event) => {toggleDropUp(); invertArrows()}}>Expertises</Link>
                </div>
                <div className="width-full text-center nav-spacing">
                    <Link to="contact" className="nav-link-small text-light" id='contact' onClick={(event) => {toggleDropUp(); invertArrows()}}>Contact</Link>
                </div>
                <div className="width-full text-center nav-spacing">
                    <Link to="articles" className="nav-link-small text-light" id='articles' onClick={(event) => {toggleDropUp(); invertArrows()}}>Articles</Link>
                </div>
            </div>
        </div>   
    )
}

export default DropUpMenu