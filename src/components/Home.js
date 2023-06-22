import { useContext } from "react";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";

const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
          <img
            className="leftimagepicture"
            src="/img/leftimage-dark1.jpg"
            alt="me"
          />
        <div className="main-text" id="selector">
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
          {`I'm`} a passionate Frontend/ServiceNow Developer with 2 year-experience developing 
          web applications. Recently completed ServiceNow bootcamp, enhancing
          my expertise in configuring and developing applications on ServiceNow platform. With a strong
          work ethic, quick learning abilities, and excellent team work skills, I bring a seamless blend
          of talent to your organization
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
