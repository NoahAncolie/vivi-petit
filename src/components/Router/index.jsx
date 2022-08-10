import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import MainNavbar from "../Nav/MainNavbar"
import Banner from "../Banner"
import clickSound from "../../assets/sounds/plastic-bubble-click.wav"
import clickSound2 from "../../assets/sounds/modern-technology-select.wav"
import Home from "../../pages/Home"
import Contact from "../../pages/Contact"
import LawFields from "../../pages/LawFields"
import Lawyer from "../../pages/Lawyer"
import Articles from "../../pages/Articles"
import DropDownMenu from "../Nav/MainNavbar"
import "../../styles/pages.scss"

const Router = () => {

    const [audio] = useState(new Audio(clickSound));
    const [playing, setPlaying] = useState(false);

    const toggleSound = () => {
        audio.currentTime = 0
        audio.play()
    };

    const toggleDropDown = () => {
        document.getElementById('dropDownMenu').classList.toggle('collapse-menu')
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    const goToPlace = (direction) => {
        const page = document.getElementById('page')
        if (page) {page.classList.toggle('fade')}
        setTimeout(() => {
            window.location.href = direction;
        }, 100)
    }

    return (
        <div className="router">
            <BrowserRouter>
                <DropDownMenu toggle={toggleSound} goTo={goToPlace} />
                <div className='menu-burger lg-hidden-h z-5' onClick={() => {toggleDropDown(); toggleSound()}}>
                    <div className='menu-bar grow1'></div>
                    <div className='menu-bar grow2'></div>
                    <div className='menu-bar grow3'></div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lawyer" element={<Lawyer />} />
                    <Route path="/lawyer-fields" element={<LawFields />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/articles" element={<Articles />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router