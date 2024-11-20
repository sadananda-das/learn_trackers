import { Link } from "react-router-dom";
import "./Entry.css";
import React, { Component } from "react";

export default class Entry extends Component {
  render() {
    const hendel = () => {
      document.body.style.backgroundColor = "dark";
    };
    return (
      <div>
        <div className="coponents">
          <div className="contents">
            <div className="heading-main">
              <h1>
                <b>WELCOME.</b>
              </h1>
              <p>Increse yoyr performence</p>
              <p>in yor student life</p>
            </div>
            <div className="btn">
              <div className="sub-btn">
                <Link
                  className="visit"
                  onClick={hendel}
                  aria-current="page"
                  to="/visit"
                >
                  visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
