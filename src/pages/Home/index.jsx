import vivianePetitAvocatCholet from "../../assets/images/viviane-petit-avocat-cholet.jpg"
import vivianePetitAvocatCholetBuste from "../../assets/images/viviane-petit-avocat-cholet-buste.jpg"
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className="bg bg-main lg-flex md-flex fade-out overflow-hidden" id="page">
            <div className="bg-layer sm-padding-top-30 md-padding-top-2 md-width-full sm-width-full lg-hidden-h">
                <div className='lg-hidden-h'>
                    <h1 className="lg-title-xxl md-title-l sm-text-center sm-underline-1 md-text-center md-underline-1 md-padding-bottom-1 sm-padding-bottom-1 border-light">Viviane PETIT<br />Avocat</h1>
                    <ul className="fill-light svg-size-3 list-no-style lg-text-xxl scroll">
                        <li className="margin-1 flex li-link fill-black hover-svg-breath">
                            <a href="tel:0259100440" className="my-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg></a>
                            <div className="margin-left-1">02 59 10 04 40</div>
                        </li>
                        <li className="margin-1 flex li-link fill-black hover-svg-breath">
                            <a href="https://www.google.fr/maps/place/2+Pl.+Michel+Ange,+49300+Cholet/@47.0556772,-0.8756564,3a,75y,265.6h,91.64t/data=!3m6!1e1!3m4!1shyupXccsD3m7w0byTGnjTw!2e0!7i16384!8i8192!4m5!3m4!1s0x480646a0a9c62e25:0x33dbe91fe72753a9!8m2!3d47.0559951!4d-0.8757689">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                            </a>
                            <div className="margin-left-1">2 Place Michel Ange, Bat C.<br />49300  CHOLET</div>
                        </li>
                        <li className="margin-1 flex li-link fill-black hover-svg-breath">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z" /></svg>
                            <div className="margin-left-1">viviane.petit@avocat.fr</div>
                        </li>
                        <br />
                        <li className="margin-1 flex li-link fill-black hover-svg-breath md-width-full md-justify-center sm-justify-center">
                            <Link to="/rendez-vous" className='cta-link md-text-xl sm-text-xl px-2'>Prendre rendez-vous</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg-width-half lg-height-full md-width-half md-height-full">
                <div className="sm-hidden-h md-hidden-h card-name">
                    <h1 className="lg-title-xxl lg-underline-1 border-light text-center">Viviane PETIT<br />AVOCAT</h1>
                    <br />
                    <ul className="fill-light svg-size-3 list-no-style lg-text-xxl">
                        <li className="margin-1 flex li-link fill-black hover-svg-breath">
                            <a href="tel:0259100440" className="my-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg></a>
                            <div className="margin-left-1">02 59 10 04 40</div>
                        </li>
                        <li className="margin-1 flex li-link fill-black hover-svg-breath">
                            <a href="https://www.google.fr/maps/place/2+Pl.+Michel+Ange,+49300+Cholet/@47.0556772,-0.8756564,3a,75y,265.6h,91.64t/data=!3m6!1e1!3m4!1shyupXccsD3m7w0byTGnjTw!2e0!7i16384!8i8192!4m5!3m4!1s0x480646a0a9c62e25:0x33dbe91fe72753a9!8m2!3d47.0559951!4d-0.8757689"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg></a>
                            <div className="margin-left-1">2 Place Michel Ange, Bat C.<br />49300  CHOLET</div>
                        </li>
                        <li className="margin-1 flex li-link fill-black hover-svg-breath">
                            <a href="mailto:petit.viviane@avocat-conseil.fr"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z" /></svg></a>
                            <div className="margin-left-1">
                                <a href="mailto:viviane.petit@avocat.fr" className="link">viviane.petit@avocat.fr</a>
                            </div>
                        </li>
                        <br />
                        <li className="margin-1 flex li-link fill-black hover-svg-breath md-width-full md-justify-center sm-justify-center">
                            <Link to="/rendez-vous" className='cta-link md-text-xl sm-text-xl px-2'>Prendre rendez-vous</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg-width-half lg-height-full md-height-full md-width-half container">
                <img src={vivianePetitAvocatCholetBuste} alt="viviane-petit-avocat-cholet" className="lg-width-full md-hidden-h sm-hidden-h lg-padding-10 switch-image-A" />
                <div className="overlay lg-width-full md-hidden-h sm-hidden-h">
                    <div className="text width-full">
                        <p className="text-m text-justify">
                            "Avocat à Cholet depuis 1998, j'interviens dans de nombreux domaines du droit au bénéfice de mes clients professionnels ou particuliers et j’ai pu développer ainsi mon expertise dans différentes matières.<br /><br />
                            En tant que spécialiste du droit et rompu à cet exercice du syllogisme juridique, je suis en mesure de vous conseiller et de vous assister dans le cadre des difficultés qui jalonnent vos vies professionnelles et/ou privées pour les régler, amiablement ou judiciairement, mais également pour les prévenir ou en simplifier la résolution par la rédaction de contrats ou de conditions générales de vente ou de services propres à votre activité."<br />
                        </p>
                        <br /><p className="hand-signed">Viviane PETIT</p>
                    </div>
                </div>
            </div>
            <div className="round sm-medium-picture md-small-picture md-hidden-h z-3 fix center-fix top-4 lg-hidden-h"><img src={vivianePetitAvocatCholet} alt="viviane-petit-avocat-cholet" className="md-hidden-h" /></div>
        </div>
    )
}

export default Home