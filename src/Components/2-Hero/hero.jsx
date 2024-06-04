import React from "react";
import { useState, useEffect } from 'react';
import "./hero.css"


const Hero = () => {


    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['FrontEnd', 'BackEnd', 'FullStack']
    const [text, setText] = useState('');
    const [delta ,setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    //------ show & hide span ------------------------------------------------------------>

    const [classState, setClassState] = useState('l-span3');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClassState(classState === 'l-span3' ? 'l-span3-none' : 'l-span3');
        }, 400);

        return () => clearInterval(intervalId);

    }, [classState]);


    return (
        <div className="heroSec" id="home">
            <div className="heroContaint container">
                <div className="heroContaint-2">
                    <div className="leftCont">
                        <p className="box l-p1">welcome all in my portfolio</p>
                        <br />
                        <span className="l-span1">Hi i'm Gamal Mahmoud Fathi, </span>
                        <br />

                        <span className="sp-all-amimate">
                            <span><i className="fa-solid fa-caret-right hero-i2"></i></span>
                            <span className="spanLoop">{text}</span>
                            <span className={classState} />
                        </span>

                        <p className="l-p2">Hallo Everyone , I have 2 Yeares of Experience in Web Development</p>
                        <p className="l-p3 box2">Let's Connect <i className="fa-solid fa-arrow-right l-i1"></i></p>

                    </div>
                    <div className="rightCont">
                        <div className="rightCont2">
                            <div className="reightIMG-Div">
                                <img className="reightIMG-1" src="./images/heroPlanet.png" alt="" />
                            </div>
                            <img className="reightIMG-2" src="./images/space ship.png" alt="" />
                        </div>
                        <div className="rightCont2">
                            React Portfolio App
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;


