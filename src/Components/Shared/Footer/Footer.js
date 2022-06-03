import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyright-text">
                <p>
                  Copyright &copy; {new Date().getFullYear()}, All Right
                  Reserved <a href="#">Ahmad Subaktagin Jabir</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
