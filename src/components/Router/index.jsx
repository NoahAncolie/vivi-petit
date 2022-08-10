import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import MainNavbar from "../Nav/MainNavbar"
import Banner from "../Banner"
import Home from "../../pages/Home"
import Contact from "../../pages/Contact"
import LawFields from "../../pages/LawFields"
import Lawyer from "../../pages/Lawyer"
import Articles from "../../pages/Articles"
import "../../styles/pages.scss"

const Router = () => {

    return (
        <div className="router">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lawyer" element={<Lawyer />} />
                    <Route path="/law-fields" element={<LawFields />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/articles" element={<Articles />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router