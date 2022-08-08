import { useEffect } from 'react'
import vivianePetitAvocatCholet from "../../assets/images/viviane-petit-avocat-cholet.jpg"
import MainNavbar from '../../components/Nav/MainNavbar'

const Home = () => {
    return (
            <div className="page home-bg">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-3 col-sm-1" id="transformable">
                        <img src={vivianePetitAvocatCholet} className="viviane-petit-avocat-cholet" alt="viviane-petit-avocat-cholet" />
                    </div>
                    <div className="col-lg-8">
                        <MainNavbar/>
                    </div>
                </div>
            </div>
    )
}

export default Home