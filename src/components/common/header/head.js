import React from "react";
import "../../../App.css";
import "./header.css";

// import an icon in an individual component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function head() {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src="../images/logo.png" alt="" />
          </div>
          <div className="login">
            <button className="login-btn">
              <h4>Sign in</h4>
              <div className="login-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default head;
