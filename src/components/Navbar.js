import React, { useEffect } from "react";
import styles from "../styles/Navbar.module.scss";
const Navbar = () => {
    useEffect(() => {
        try {
            const logo = document.querySelector(".logo");
            const links = document.querySelector(".links");
            const hire = document.querySelector(".hire");
            const logowidth = document.querySelector(".logo").offsetWidth;
            const hirewidth = document.querySelector(".hire").offsetWidth;
            // links.styles.widht = `${window.innerWidth - logo - hire}px`;

            if (window.innerWidth > 768) {
                if (logowidth > hirewidth) {
                    hire.style.width = `${logowidth}px`;
                } else {
                    logo.style.width = `${hirewidth}px`;
                }
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <section className={`${styles.Navbar} Navbar`}>
            <div className="logo">
                <h1>Deep Developers </h1>
            </div>
            <ul className="links">
                <li className="active">Home</li>
                <li>My Portfolio</li>
                <li>My Services</li>
                <li>About Me</li>
            </ul>
            <div className={"hire"}>
                <a href="#">Lets Chat</a>
            </div>
        </section>
    );
};

export default Navbar;
