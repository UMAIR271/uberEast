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
        marginTop: "20px",
      }}
    >
      <div
        className="footer-content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="logo"
          style={{
            backgroundColor: "white",
            padding: "10px 20px 10px",
            borderRadius: "4px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            mt: "10",
          }}
        >
          DIAZO
        </div>
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
      </div>
    </footer>
  );
};

export default Footer;
