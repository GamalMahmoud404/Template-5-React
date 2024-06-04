
import React from "react";
import { useRef, useEffect, useState } from "react";
import "./sec3.css";

function Sec3() {


  return (
    <section className="sec3">
      <div className="row containerSec3">
        <div className="left-sec3 mb-md-0 mb-4 col-md-6 col-12">See my projects at once & leavehere your email address.</div>
        <div className="right-sec3 col-md-6 col-12">
          <div className="right2-sec3">
            <input className="txt-sec3 col-7" type="text" placeholder="Email Address" />
            <button className="btn-sec3 col-5">Submet</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Sec3;




