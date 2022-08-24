import { useState } from "react"
// ----- Import Components -----
import RealEstate from "./RealEstate"
import Construction from "./Construction"
import Commercial from "./Commercial"
import Civil from "./Civil"
import Family from "./Family"
// ----- Import Pictures -----
import lawyerPicture from "../../assets/images/bonhomme.png"
import BuildingPicture from "../../assets/images/construction.jpg"
import RealEstatePicture from "../../assets/images/immobilier.jpg"
import FamilyPicture from "../../assets/images/famille.jpg"
import HammerPicture from "../../assets/images/marteau.jpg"
import SignedPicture from "../../assets/images/signature.jpg"

const LawFields = () => {

    const [centerPicture, setPicture] = useState(lawyerPicture)
    const [centerText, setText] = useState(<h1 className="border-left-2 border-blue title">Domaines d'expertises</h1>)

    const setCenterPicture = (pictureURL) => {
        document.getElementById('center-picture').classList.toggle('grow-h')
        document.getElementById('center-picture').classList.toggle('grow-h-2')
        setPicture(pictureURL)
    }

    const setCenterText = (componentJSX) => {
        setText(componentJSX)
    }

    return (
        <div className="bg bg-main fade-out lg-padding-10 sm-padding-1 md-padding-1" id="page">
            <div className="fixed flex align-center justify-center h-full width-full">
                <div className="container expert-container justify-center">
                    <img src={centerPicture} alt="drawing-of-a-lawyer" id="center-picture" className="radius-5 expert-center-picture grow-h block" />
                    <div className="overlay">
                        <div className="expert-text">
                            {centerText}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-between">
                <button className="button" onClick={() => { setCenterPicture(RealEstatePicture); setCenterText(RealEstate) }}>Droit immobilier</button>
                <button className="button" onClick={() => { setCenterPicture(BuildingPicture); setCenterText(Construction) }}>Droit de la construction</button>
                <button className="button" onClick={() => { setCenterPicture(SignedPicture); setCenterText(Commercial) }}>Droit commercial</button>
                <button className="button" onClick={() => { setCenterPicture(HammerPicture); setCenterText(Civil) }}>Droit des procédures civiles d’exécution</button>
                <button className="button" onClick={() => { setCenterPicture(FamilyPicture); setCenterText(Family)  }}>Droit de la famille</button>
            </div>
        </div >

    )
}

export default LawFields