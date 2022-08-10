const Banner = () => {
    return (
        <div className="banner sm-hidden-h">
            <div className="brand ban-div md-underline-1 md-width-full">
                <h2>Viviane PETIT<br/>AVOCAT</h2>
            </div>
            <div className="adress ban-div md-underline-1 md-width-full">
                <h2>2 Place Michel Ange<br/>Bat C CHOLET</h2>
            </div>
            <div className="contact-adress md-width-full">
                <h2>02 59 10 04 40<br/><a href="mailto:petit.viviane@avocat-conseil.fr" className="email-link" target="_blank" rel="noopener noreferrer">petit.viviane@avocat-conseil.fr</a></h2>
            </div>
        </div>
    )
}

export default Banner