import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAtomValue } from "jotai"
import { JWT } from "../../stores/user"
import ambiantSound from "../../assets/sounds/music.mp3"
import Home from "../../pages/Home"
import Contact from "../../pages/Contact"
import LawFields from "../../pages/LawFields"
import Lawyer from "../../pages/Lawyer"
import Articles from "../../pages/Articles"
import AdminLogin from "../../pages/AdminLogin"
import DropDownMenu from "../Nav/DropDownMenu"
import DropUpMenu from "../Nav/DropUpMenu"
import "../../styles/pages.scss"

const Router = () => {

    const [dropUp, setDropUp] = useState(false)
    const JwtUser = useAtomValue(JWT)
    const [music, setMusic] = useState(false)
    const [musicStarted, setMusicStarted] = useState(false)

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

    const playMusic = () => {
        let ambiantMusic = document.getElementById('audioTag')
        if (ambiantMusic) {
            ambiantMusic.volume = 0.3
            ambiantMusic.play() // ------------ REMETTRE PLAY ------------
        }
    }

    const stopMusic = () => {
        let ambiantMusic = document.getElementById('audioTag')
        if (ambiantMusic) {
            ambiantMusic.pause()
        }
    }

    const setToggleMusic = () => {
        setMusic(!music)
    }

    const setStart = () => {
        setMusicStarted(true)
        setToggleMusic()
        playMusic()
        document.getElementById('soundToggler').classList.add('show-sound-toggler')
    }

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            const enterButton = document.getElementById('enterBtn')
            if (enterButton) {
                enterButton.style.transform = `translate(calc(${event.clientX / 80}% - 20px), calc(${event.clientY / 80}% - 20px))`
            }
            document.getElementById('mouse').style.top = `calc(${event.clientY}px - 10px)`
            document.getElementById('mouse').style.left = `calc(${event.clientX}px - 10px)`
            if (event.clientY > window.screen.height / 2 && event.clientX > window.screen.width / 4 && event.clientX < ( window.screen.width - window.screen.width / 4)) {
                document.getElementById('mouse').classList.add('call-to-click')
            } else {
                document.getElementById('mouse').classList.remove('call-to-click')
            }

        })
    }, [])

    return (
        <div className="router">
            <BrowserRouter>
                {musicStarted ? <></> : <div className="music-modale">
                    <button className="music-toggle" id="enterBtn" onClick={setStart}>Entrer</button>
                </div>}
                <DropDownMenu JwtUser={JwtUser} toggle={toggleDropDown} />
                <div className='menu-burger lg-hidden-h z-5' onClick={() => { toggleDropDown(); }}>
                    <div className={`menu-bar grow1 ${JwtUser ? "grow1-purple" : "grow1"}`}></div>
                    <div className={`menu-bar grow2 ${JwtUser ? "grow2-purple" : "grow2"}`}></div>
                    <div className={`menu-bar grow3 ${JwtUser ? "grow3-purple" : "grow3"}`}></div>
                </div>
                <Routes>
                    <Route path="/" element={<Home playMusic={playMusic} stopMusic={stopMusic} />} />
                    <Route path="/lawyer" element={<Lawyer />} />
                    <Route path="/lawyer-fields" element={<LawFields />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/mon-espace" element={<AdminLogin />} />
                </Routes>
                <DropUpMenu invertArrows={invertArrows} JwtUser={JwtUser} toggleDropUp={toggleDropUp} />
                <div className='drop-up-toggle md-hidden-h sm-hidden-h z-5' onClick={() => { toggleDropUp() }}>
                    {dropUp ? <></> : <div className='arrow-up drop-up-element fill-light'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" /></svg>
                    </div>}
                    <div className={`drop-up-text drop-up-element text-light`}>Menu</div>
                    {dropUp ? <div className='arrow-down drop-up-element fill-light'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" /></svg>
                    </div> : <></>}
                </div>
                <div className="sound-toggler" id="soundToggler" onClick={setToggleMusic}>
                    {!music ? <svg xmlns="http://www.w3.org/2000/svg" onClick={playMusic} viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={stopMusic} viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM224 191.1v128C224 337.7 209.7 352 192 352S160 337.7 160 320V191.1C160 174.3 174.3 160 191.1 160S224 174.3 224 191.1zM352 191.1v128C352 337.7 337.7 352 320 352S288 337.7 288 320V191.1C288 174.3 302.3 160 319.1 160S352 174.3 352 191.1z" /></svg>
                    }
                    <audio
                        controls src={ambiantSound} className="audio-tag" id="audioTag">
                    </audio>
                </div>
            </BrowserRouter>
            <div className="mouse sm-hidden-h md-hidden-h" id="mouse"></div>
        </div>
    )
}

export default Router