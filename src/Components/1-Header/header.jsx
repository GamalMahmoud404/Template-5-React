import React, { Children } from "react";
import "./header.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {

    const [showModel, setshowModel] = useState(false)

    return (
            <div className="headAll">
                <header className="head-top container  mt-3 shadow">
                    <div className="headerLogo me-2 d-flex align-items-center">
                        logo
                    </div>
                    <div /><div /><div />
                    <div className="menu-v">
                        <ul className="menu-sec ms-4">
                            <HashLink to={"#home"} smooth>Home</HashLink>
                            <HashLink to={"#skills"} smooth>Skills</HashLink>
                            <HashLink to={"#projects"} smooth>projects</HashLink>
                        </ul>
                        <ul className="menu-i">
                            <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn-dark-mode" onClick={() => { }}><img src="./images/Dark_Thime/sun.png" alt="" /></button>
                        <button className="btn-menu ms-4" onClick={() => { setshowModel(true) }}><i className="fa-solid fa-bars"></i></button>
                    </div>
                </header>
                {
                    showModel && (
                        <div className="menu-pop-up" >
                            <div >
                                <ul className="menu-sec menu-sec-2">
                                    <li><button onClick={() => { setshowModel(false) }}><i className="fa-solid fa-xmark"></i></button></li>
                                    <HashLink to={"#home"} smooth>Home</HashLink>
                                    <HashLink to={"#skills"} smooth>Skills</HashLink>
                                    <HashLink to={"#projects"} smooth>projects</HashLink>
                                </ul>
                                <ul className="menu-i menu-i-2">
                                    <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>

    )
}

export default Header;
