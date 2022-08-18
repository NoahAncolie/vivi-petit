import { Link } from "react-router-dom"
import { useEffect } from "react";

const DropUpMenu = ({toggleDropUp, invertArrows}) => {

    useEffect(() => {
        // alert(window.location.pathname)
    }, [window.location.pathname])

    return (
        <div className="drop-up-menu z-4 width-full md-hidden-h sm-hidden-h collapse-down-menu bg-main" id="dropUpMenu">
            <div className="width-full lg-title-xl">
                <div className="width-full text-center nav-spacing">
                    <Link to={`${window.location.pathname === '/lawyer' ? '/' : '/lawyer'}`} className="nav-link-small text-light" id='lawyer' onClick={(event) => {toggleDropUp(); invertArrows()}}>{`${window.location.pathname === '/lawyer' ? 'Accueil' : 'Viviane PETIT'}`}</Link>
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