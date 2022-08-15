import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "../../pages/Home"
import Contact from "../../pages/Contact"
import LawFields from "../../pages/LawFields"
import Lawyer from "../../pages/Lawyer"
import Articles from "../../pages/Articles"
import DropDownMenu from "../Nav/DropDownMenu"
import DropUpMenu from "../Nav/DropUpMenu"
import "../../styles/pages.scss"

const Router = () => {
    
    const [dropUp, setDropUp] = useState(false)


    const toggleDropDown = () => {
        document.getElementById('dropDownMenu').classList.toggle('collapse-menu')
    }

    const toggleDropUp = () => {
        invertArrows()
        document.getElementById('dropUpMenu').classList.toggle('collapse-down-menu')
    }

    const invertArrows = () => {
        setDropUp(!dropUp)
    }

    const goToPlace = (direction) => {
        const page = document.getElementById('page')
        if (page) { page.classList.toggle('fade') }
        setTimeout(() => {
            window.location.href = direction;
        }, 100)
    }

    return (
        <div className="router">
            <BrowserRouter>
                <DropDownMenu goTo={goToPlace} />
                <div className='menu-burger lg-hidden-h z-5' onClick={() => { toggleDropDown() }}>
                    <div className='menu-bar grow1'></div>
                    <div className='menu-bar grow2'></div>
                    <div className='menu-bar grow3'></div>
                </div>
                <Routes>
                    <Route path="/" element={<Home goTo={goToPlace} />} />
                    <Route path="/lawyer" element={<Lawyer />} />
                    <Route path="/lawyer-fields" element={<LawFields />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/articles" element={<Articles />} />
                </Routes>
                <DropUpMenu goTo={goToPlace} invertArrows={invertArrows}/>
                <div className='drop-up-toggle md-hidden-h sm-hidden-h z-5' onClick={() => { toggleDropUp() }}>
                    {dropUp ? <></> : <div className='arrow-up drop-up-element fill-light'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>
                    </div> }
                    <div className={`drop-up-text drop-up-element text-light`}>Menu</div>
                    {dropUp ? <div className='arrow-down drop-up-element fill-light'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
                    </div> : <></>}
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Router