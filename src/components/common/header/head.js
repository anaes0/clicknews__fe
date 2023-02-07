import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

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
              <FaRegUserCircle
                className="login-icon"
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "45px",
                }}
                size="28px"
                color="white"
              />
              <h4>Sign in</h4>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default head;
