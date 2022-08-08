import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainNavbar from "../Nav/MainNavbar"
import Banner from "../Banner"
import Home from "../../pages/Home"
import Contact from "../../pages/Contact"
import Page from "../Page"
import "../../styles/pages.scss"

const Router = () => {

    return (
        <div className="router">
            <BrowserRouter>
                <Banner />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/lawyer" element={<Page />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router