import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import Header from "./header";
import ImageGallerys from "./ImageGallery";
import Features from "./features";
import About from "./about";
import Services from "./services";
import Gallery from "./gallery";
import Testimonials from "./testimonials";
import Team from "./Team";
import Contact from "./contact";
import Dataaa from "../data/data";

const Navigation = () => {
  const [dark, setDark] = useState(false);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(Dataaa);
    console.log(jsonData);
  }, [jsonData]);

  return (
    <div>
      {dark === true ? (
        <nav
          style={{ background: "black" }}
          id="menu"
          className="navbar navbar-default navbar-fixed-top"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                {" "}
                <span className="sr-only">Toggle Navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">
                NAVIGATION
              </a>{" "}
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#features" className="page-scroll">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="page-scroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="page-scroll">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="page-scroll">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="page-scroll">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#team" className="page-scroll">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="page-scroll">
                    Contact
                  </a>
                </li>
                <li style={{ margin: "10px" }}>
                  <DarkModeToggle onChange={setDark} checked={dark} size={80} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle Navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">
                NAVIGATION
              </a>{" "}
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#features" className="page-scroll">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="page-scroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="page-scroll">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="page-scroll">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="page-scroll">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#team" className="page-scroll">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="page-scroll">
                    Contact
                  </a>
                </li>
                <li style={{ margin: "10px" }}>
                  <DarkModeToggle onChange={setDark} checked={dark} size={80} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      {jsonData.map((json) => (
        <div className="bad">
          {dark === true ? (
            <div className="bad">
              <Header data={json.Header} />
              <ImageGallerys black={"imageGallery"} />
              <Features data={json.Features} style={"features1"} />
              {/* <Profile /> */}
              <About data={json.About} dark={"about1"} />
              <Services data={json.Services} dark={"services1"} />
              <Gallery dark={"portfolio1"} />
              {/* <Collage /> */}
              <Testimonials data={json.Testimonials} dark={"testimonial1"} />
              <Team data={json.Team} dark={"team1"} />
              <Contact
                data={json.Contact}
                dark={"contact1"}
                footer={"footer1"}
              />
            </div>
          ) : (
            <div className="bad">
              <Header data={json.Header} />
              <ImageGallerys />
              <Features data={json.Features} style={"features"} />
              {/* <Profile /> */}
              <About data={json.About} dark={"about"} />
              <Services data={json.Services} dark={"services"} />
              <Gallery dark={"portfolio"} />
              {/* <Collage /> */}
              <Testimonials data={json.Testimonials} dark={"testimonial"} />
              <Team data={json.Team} dark={"team"} />
              <Contact data={json.Contact} dark={"contact"} footer={"footer"} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
