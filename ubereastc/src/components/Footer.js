import React from "react";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        width: "100%",
        height: "305px",
        background: "#FFD600",
        padding: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="footerLogo"
        src={process.env.PUBLIC_URL + "/assests/logo.svg"}
        alt="Pizza"
        style={{ width: "auto%", height: "auto", border: "none" }}
      />

      <p className="footerLine">Folge uns auf</p>
      <div className="social-icons" style={{ marginTop: "10px" }}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook
            style={{ fontSize: "2rem", margin: "0 10px", color: "black" }}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            style={{ fontSize: "2rem", margin: "0 10px", color: "black" }}
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter
            style={{ fontSize: "2rem", margin: "0 10px", color: "black" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
