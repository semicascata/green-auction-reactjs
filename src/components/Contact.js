import React from "react";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="me">
        <div className="twContainer">
          <div className="twEffect">
            <h4 className="twText title-name">contact me.</h4>
          </div>
        </div>
        <div className="cardMe">
          <i className="fas fa-envelope"></i> raulduarte94@hotmail.com <br />
          <i className="fas fa-phone"></i> +55 (41) 9 9700-2285 <br />
          <i className="fas fa-map-marker-alt"></i> Curitiba/PR - Brazil <br />
        </div>

        <p>
          <a
            type="button"
            href="https://github.com/semicascata"
            className="btn btn-light btn-floating btn-lg btn-git"
          >
            <i className="fab fa-github"></i> GitHub
          </a>

          <a
            type="button"
            href="https://www.linkedin.com/in/raul-duarte-605378156/"
            className="btn btn-light btn-floating btn-lg btn-li"
          >
            <i className="fab fa-linkedin"></i> Linkedin
          </a>
        </p>
      </div>

      <footer>&copy; 2021 Raul Duarte</footer>
    </div>
  );
};

export default Contact;
