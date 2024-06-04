
import React from "react";
import "./footer.css";

function Footer() {
    return (
        <section className="footer">
            <div className="divFooter" />
            <div className="row div2Footer">
                <div className="leftFooterDiv col-md-4 col-12">
                    <p className="pLogoPosition">logo</p>
                </div>
                <div className="rightFooterDiv col-md-8 col-12">
                    <div className="right2FooterDiv ">
                        <a href=""><i className="fa-brands fa-linkedin-in footerA"></i></a>
                        <a href=""><i className="fa-brands fa-facebook-f footerA"></i></a>
                        <a href=""><i className="fa-brands fa-instagram footerA"></i></a>
                    </div>
                    <p className="footerP">--Copyrights 2024-- All Rights Reserved here By Gamal Mahmoud</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;








