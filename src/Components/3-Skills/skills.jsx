import React from "react";
import { useRef, useEffect, useState } from "react";
import "./skills.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const ArrowNext = ({ direction, onClick }) => (
    <div className={`arrow ${direction}`} onClick={onClick}>
        <i className="fa-solid fa-caret-right"></i>
    </div>
);

const ArrowPrev = ({ direction, onClick }) => (
    <div className={`arrow ${direction}`} onClick={onClick}>
        <i className="fa-solid fa-caret-left"></i>
    </div>
);

const customPaging = (i) => (
    <button className={`custPaging ${i === 0 ? 'active' : ''}`}>
        {i + 1}
    </button>
);

// -------------------------------------------------

const Sec1 = () => {

    const arr = [
        {
            pransh: "Front-End",
            deg: "90"
        },
        {
            pransh: "Back-End",
            deg: "70"
        },
        {
            pransh: "Full-End",
            deg: "80"
        },
        {
            pransh: "UI",
            deg: "95"
        },
        {
            pransh: "UX",
            deg: "75"
        },
    ]

    const [percentages, setPercentages] = useState(
        arr.map((item) => parseInt(item.deg, 10))
    );
    const radius = 60;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentages) / 100
    const circleWidth = (200 / 85 * radius)
    const [dashOffsetState, setDashOffsetState] = useState(radius * Math.PI * 2);
    const circleRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        const intervalId = setInterval(() => {
                            if (dashOffsetState < dashOffset) {
                                setDashOffsetState(dashOffsetState + 1);
                            } else {
                                clearInterval(intervalId);
                            }
                        }, 1000 / (dashOffset / 100)); // animate over 2 seconds
                    }
                });
            },
            { threshold: 1 }
        );
        observer.observe(circleRef.current);
    }, [dashOffset]);

    // ------- slider  ------------------------

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        adaptiveHeight: true,
        customPaging: () => (
            <div className="custPaging" />
        ),
        customPaging,
        nextArrow: <ArrowNext direction="right" />,
        prevArrow: <ArrowPrev direction="left" />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className="sec1" id="skills" >
            <div className="allContant">
                <p className="p1">Skills</p>
                <p className="p2">You can See My Skills Here</p>
                <div className="boxArrow" />
                <Slider {...settings} className='sliderAll' >

                    {arr.map((item, index) => (
                        <div key={index} className="containerOfCircle">
                            <svg
                                width={circleWidth}
                                height={circleWidth}
                                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
                                className="svgClassAll"
                            >
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#003870" />
                                        <stop offset="100%" stopColor="#0067b5" />
                                    </linearGradient>
                                </defs>
                                <circle
                                    cx={circleWidth / 2}
                                    cy={circleWidth / 2}
                                    strokeWidth={"10px"}
                                    r={radius}
                                    className="circle-background"
                                />
                                <circle
                                    ref={circleRef}
                                    cx={circleWidth / 2}
                                    cy={circleWidth / 2}
                                    strokeWidth={"10px"}
                                    r={radius}
                                    className="circle-progress"
                                    style={{
                                        strokeDasharray: dashArray,
                                        strokeDashoffset:
                                            dashArray - (dashArray * percentages[index]) / 100,
                                        transition: "stroke-dashoffset 2s linear"
                                    }}
                                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                                    stroke="url(#gradient)"
                                />
                                <text x="50%" y="40%" dy="0.3em" textAnchor="middle" className="circle-text">
                                    {item.deg} %
                                </text>
                                <text x="50%" y="60%" dy="0.3em" textAnchor="middle" className="circle-text2">
                                    {item.pransh}
                                </text>
                            </svg>
                        </div>
                    ))}

                </Slider>
            </div>


        </section >
    )
}

export default Sec1;


