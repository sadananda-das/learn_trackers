import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Type.css";
export default class Type extends Component {
  render() {
    const hendel = () => {
      document.body.style.backgroundColor = "dark";
    };
    return (
      <div>
        <div className="containers">
          <div className="content">
            <div className="heading">
              <div className="heading1">
                <h1>
                  <b>User Type</b>
                </h1>
              </div>
              <div className="heading2">
                <h3>select besicaly what you are</h3>
              </div>
            </div>
            <div className="buttons">
              <div className="teachers">
                <div className="type">
                  <Link
                    class="buttons2"
                    onClick={hendel}
                    to="/teacher"
                    role="button"
                  >
                    TEACHER
                  </Link>
                </div>
              </div>
              <div className="students">
                <div className="type">
                  <Link class="buttons2" to="/student" role="button">
                    STUDENT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
