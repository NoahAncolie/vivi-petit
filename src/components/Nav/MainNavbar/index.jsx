import { Link } from "react-router-dom"

const MainNavbar = ({squareStyle, changeStyle}) => {

    const activateLink = (event) => {
        setTimeout(() => {
            event.run()
            console.log("hello")
        },500)
        let element = document.getElementById('transformable')
        if (element) {
            element.classList.toggle('slideOut')
        }
    }
    return (
        <div className={squareStyle ? "navbar side-nav" : "navbar square-nav"}>
            <Link to="lawyer" className="nav-link" onClick={(event) => { activateLink(event)}}><h2>Présentation</h2></Link>
            <Link to="law-fields" className="nav-link" onClick={(event) => { activateLink(event)}}><h2>Domaines d'activité</h2></Link>
            <Link to="articles" className="nav-link" onClick={(event) => { activateLink(event)}}><h2>Actualités</h2></Link>
            <Link to="contact" className="nav-link" onClick={(event) => { activateLink(event)}}><h2>Contact</h2></Link>
        </div>   
    )
}

export default MainNavbar