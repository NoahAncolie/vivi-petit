import { useState } from "react"
// ----- Import Components -----
import RealEstate from "./RealEstate"
import Construction from "./Construction"
import Commercial from "./Commercial"
import Civil from "./Civil"
import Family from "./Family"
import Safe from "./Safe"
// ----- Import Pictures -----
import lawyerPicture from "../../assets/images/bonhomme.png"
import BuildingPicture from "../../assets/images/construction.jpg"
import RealEstatePicture from "../../assets/images/immobilier.jpg"
import FamilyPicture from "../../assets/images/famille.jpg"
import HammerPicture from "../../assets/images/marteau.jpg"
import SignedPicture from "../../assets/images/signature.jpg"
import PeopleFighting from "../../assets/images/people-fighting.jpg"

const LawFields = () => {

    const [centerPicture, setPicture] = useState(lawyerPicture)
    const [isText, setIsText] = useState(false)
    const [centerText, setText] = useState(<h1 className="border-left-2 border-blue title">Domaines d'expertises</h1>)

    const setCenterPicture = (pictureURL) => {
        setPicture(pictureURL)
    }

    const setCenterText = (componentJSX) => {
        setText(componentJSX)
        setIsText(true)
    }

    return (
        <>
            <div className="bg bg-light fade-out lg-padding-10 sm-padding-1 md-padding-1" id="page">
                <div className="fixed flex align-center justify-center h-full width-full">
                    <div className="expert-container justify-center">
                        {!isText ?
                            <img src={centerPicture} alt="drawing-of-a-lawyer" id="center-picture" className="radius-5 expert-center-picture grow-h block" />
                            :
                            <div className="expert-overlay">
                                <div className="expert-text">
                                    {centerText}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div >
            <div className="col-left bg-main">
                <button className="expert-button text-light" onClick={() => { setCenterPicture(RealEstatePicture); setCenterText(RealEstate) }}><img src={RealEstatePicture} alt="drawing-of-a-lawyer" id="center-picture" className="radius-5 block expert-button-img" />Droit Immobilier</button>
                <button className="expert-button text-light" onClick={() => { setCenterPicture(BuildingPicture); setCenterText(Construction) }}><img src={BuildingPicture} alt="drawing-of-a-lawyer" id="center-picture" className="radius-5 block expert-button-img" />Droit de la construction</button>
                <button className="expert-button text-light" onClick={() => { setCenterPicture(SignedPicture); setCenterText(Commercial) }}><img src={SignedPicture} alt="drawing-of-a-lawyer" id="center-picture" className="radius-5 block expert-button-img" />Droit commercial</button>
            </div>
            <div className="col-right bg-main">
                <button className="expert-button text-light" onClick={() => { setCenterPicture(HammerPicture); setCenterText(Civil) }}><img src={HammerPicture} alt="drawing-of-a-lawyer" id="center-picture" className="radius-5 block expert-button-img" />Droit des procédures civiles d’exécution</button>
                <button className="expert-button text-light" onClick={() => { setCenterPicture(FamilyPicture); setCenterText(Family) }}><img src={FamilyPicture} alt="drawing-of-a-lawyer" id="center-picture" className="radius-5 block expert-button-img" />Droit de la famille</button>
                <button className="expert-button text-light" onClick={() => { setCenterPicture(FamilyPicture); setCenterText(Safe) }}><img src={PeopleFighting} alt="drawing-of-a-lawyer" id="center-picture" className="radius-5 block expert-button-img" />Droit des sûretés</button>
            </div>
        </>

    )
}

export default LawFields