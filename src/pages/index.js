import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Home = () => {
    // console.log(document.readyState);
    useEffect(() => {
        try {
            const navbar = document.querySelector(".Navbar");
            const height = navbar.offsetHeight;
            const innerHeight = window.innerHeight;
            const mainbanner = document.querySelector(".mainbanner");
            mainbanner.style.minHeight = `${innerHeight - height}px`;

            const mainbannerbutton =
                document.querySelector(".mainbannerbutton");
            const mainbannerbuttonbottom =
                mainbannerbutton.getBoundingClientRect().bottom;
            const About = document.querySelector(".About");
            const AboutMargin = About.offsetHeight / 2;
            if (
                window.innerWidth -
                    AboutMargin -
                    mainbannerbuttonbottom -
                    height >
                30
            ) {
                About.style.marginTop = `-${About.offsetHeight / 2}px`;
            }
        } catch (err) {
            console.log(err);
        }
        return () => {};
    }, []);

    const ProjectsCard = () => {
        return (
            <div className="card">
                <div className="image">
                    <img src="/images/main.png" alt="project" />
                </div>
                <div className="content">
                    <ul className="tags">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <h2>Blog Website</h2>
                    <p>
                        Aliquom porta nisl dolor, molestie pellentesque elit
                        molestie in. Morbi metus neque, elementum ullamcorper
                        hendrerit eget, tincidunt et nisi. Sed magna nunc,
                        consequot vel aliquam vitae, porta oc mi. Integer
                        commodo sapien lacus, nec interdum nisi vehicula
                        aliquam. Aliquom enim lorem Iaoreet ut egestas quis,
                        rutrum sed lectus. Duis et purus in
                    </p>
                    <div className="button">
                        <button>
                            <span className="play">
                                <i className="bx bx-play"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const ServicesCard = () => {
        return (
            <div className="card">
                <div className="top">
                    <h2>Basic</h2>
                    <h5>Landing Page</h5>
                </div>
                <div className="pricing">
                    <h2>
                        <span className="start">Starting from:</span>
                        <span className="price">$45 *</span>
                    </h2>
                </div>
                <div className="content">
                    <h3>What you get?</h3>
                    <ul>
                        <li>
                            <span>
                                <i className="bx bx-check"></i>
                            </span>{" "}
                            1 Responsive page
                        </li>
                        <li>
                            <span>
                                <i className="bx bx-check"></i>
                            </span>{" "}
                            1 Responsive page
                        </li>
                        <li>
                            <span>
                                <i className="bx bx-check"></i>
                            </span>{" "}
                            1 Responsive page
                        </li>
                        <li>
                            <span>
                                <i className="bx bx-check"></i>
                            </span>{" "}
                            1 Responsive page
                        </li>
                        <li>
                            <span>
                                <i className="bx bx-check"></i>
                            </span>{" "}
                            1 Responsive page
                        </li>
                    </ul>
                </div>
                <div className="button">
                    <button>Get Started</button>
                </div>
            </div>
        );
    };

    return (
        <section className={styles.Home}>
            <Navbar />
            <div className="mainbanner">
                <div className="overlays">
                    <a href="">
                        <i className="bx bxl-instagram-alt"></i>
                    </a>
                    <a href="">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
                <div className="maincontainer">
                    <h1>
                        Deep <br /> Developers
                    </h1>
                    <p>Get your reflection online</p>
                    <div className="images"></div>
                    <div className="button">
                        <button className="mainbannerbutton">Lets Go</button>
                    </div>
                </div>
                <div className="image">
                    {/* <img src="/images/main.png" alt="hero" /> */}
                    <Image
                        src="/images/main.png"
                        // none
                        objectFit="contain"
                        className="hero"
                        fill
                        alt="hero"
                        priority
                    />
                </div>
            </div>
            <div className="About">
                <h2>Hi,</h2>
                <p>
                    I am Jashandeep Singh a full-stack web developers with
                    experience of 2 years. I have great experience in HTML, CSS
                    , JavaScript, React Js, Next Js, python, and Django Rest
                    Framework. I have great experience in designing the web
                    application which helps my client to increase the income
                    sources. I recent projects are based upon Django and Next
                    Js. L love to design the websites that help my clients.
                </p>
            </div>
            <div className="portfolio">
                <h1>My Projects</h1>
                <div className="cards">
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                    <ProjectsCard />
                </div>
            </div>
            <div className="myservices">
                <h1>My Services</h1>
                <div className="cards">
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                </div>
                <p className="bottom-text">
                    Pricing may very according to the size of the web page.
                    Terms ord conditions get applied and shall snared to you
                    before signing tne contract
                </p>
            </div>
        </section>
    );
};

export default Home;
