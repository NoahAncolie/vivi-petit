import { Link } from "react-router-dom"
import { useEffect } from "react";

const DropUpMenu = ({toggleDropUp, invertArrows, stopMusic, playMusic}) => {

    useEffect(() => {
        // alert(window.location.pathname)
    }, [window.location.pathname])

    return (
        <div className="drop-up-menu z-4 width-full md-hidden-h sm-hidden-h collapse-down-menu bg-main" id="dropUpMenu">
            <div className="width-full lg-title-l">
                <div className="width-full text-center nav-spacing">
                    <Link to={`/`} className="nav-link-small text-light" id='lawyer' onClick={(event) => {toggleDropUp(); invertArrows(); playMusic()}}>{`Accueil`}</Link>
                </div>
                <div className="width-full text-center nav-spacing">
                    <Link to="lawyer-fields" className="nav-link-small text-light" id='lawyer-fields' onClick={(event) => {toggleDropUp(); invertArrows(); stopMusic()}}>Expertises</Link>
                </div>
                <div className="width-full text-center nav-spacing">
                    <Link to="contact" className="nav-link-small text-light" id='contact' onClick={(event) => {toggleDropUp(); invertArrows(); stopMusic()}}>Informations</Link>
                </div>
                {/* <div className="width-full text-center nav-spacing">
                    <Link to="articles" className="nav-link-small text-light" id='articles' onClick={(event) => {toggleDropUp(); invertArrows(); stopMusic()}}>Articles</Link>
                </div> */}
                <div className="width-full text-center nav-spacing">
                    <Link to="rendez-vous" className="nav-link-small text-light" id='articles' onClick={(event) => {toggleDropUp(); invertArrows(); stopMusic()}}>Prendre rendez-vous</Link>
                </div>
            </div>
        </div>   
    )
}

export default DropUpMenu