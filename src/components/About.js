import { useContext } from "react";
import NavContext from "../context/navContext";


const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I code beautiful things, and I love what I do
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/leftimage-dark1.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
            {`I'm`} a passionate Frontend/ServiceNow Developer with 2 year-experience developing 
          web applications. Recently completed ServiceNow bootcamp, enhancing
          my expertise in configuring and developing applications on ServiceNow platform. With a strong
          work ethic, quick learning abilities, and excellent team work skills, I bring a seamless blend
          of talent to your organization
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Vy
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Huynh
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Vietnamese
                  </h6>
                </li>
              
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    South Australia
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
              <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>2 years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    English/ Vietnames
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+61 466 655 265
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    huynh.havy271@gmail.com
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="/img/VyHuynh_Resume.pdf" className="btn btn-resume" download>
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Jan 2023 - Feb 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        volunteer mentor
                        <span className="separator" />
                        <span className="font-weight-700">42 Coding School Adelaide</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Provided comprehensive support and mentorship to students in C language programming projects, 
                      and guidance to enhance collaboration and time management skills, promoting a productive work environment
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
               
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Feb 2022 - Nov 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        JavaScript Developer
                        <span className="separator" />
                        <span className="font-weight-700">EPAM Vietnam</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      1. Utilized technologies such as HTML5, SASS, JavaScript, ReactJS, and Redux to 
                      create and optimize dynamic web applications.<br />
                      2. Developed robust NodeJS servers and efficient APIs,
                      leveraging MongoDB and RESTful architecture for seamless data management and retrieval.<br />
                      3. Integrated with leading third-party APIs
                      to enhance functionality and elevate the user experience.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Ends */}
               
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2016 - 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Career Break
                        <span className="font-weight-700"></span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      After embracing the joy of parenthood, I dedicated myself to family 
                      responsibilities. I seized valuable 
                      opportunities for professional growth through online courses, 
                      industry conferences, and personal projects. Notable training courses 
                      attended included Frontend Web Development, 
                      PHP Web Development, and Full Stack Bootcamps
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Ends */}
               
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2012- 2016
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Telemarketing Executive
                        <span className="separator" />
                        <span className="font-weight-700">DKSH Vietnam</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      1. Oversaw DKSH Privileges, a CRM program, and orchestrated tailored marketing initiatives aligned with client needs 
                      and budget constraints. <br />
                      2. Fostered customer satisfaction and loyalty through diligent 
                      follow-ups with existing and prospective clients. <br />
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}

                 {/* Item Starts */}
                 <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2009- 2012
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Brand Executive
                        <span className="separator" />
                        <span className="font-weight-700">Mead Johnson Vietnam</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      1. Led packaging development efforts for new product launches, 
                      ensuring products were presented in an appealing and effective manner. <br />
                      2. Oversaw a wide range of marketing activities, including outdoor 
                      events, seminars, press events, media advertisements, and more to drive 
                      brand awareness and engagement. <br />
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}

                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2008 - 2009
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                      Laboratory Staff
                        <span className="separator" />
                        <span className="font-weight-700">University of Technology</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      1. Conducted comprehensive experiments and tests on wastewater samples. <br />
                      2. Analyzed experimental data with precision and delivered insightful 
                      reports, providing valuable information for further evaluation and 
                      decision-making. <br />
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">    
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Externship training program
                        <span className="separator" />
                        <span className="font-weight-700">
                          ServiceNow NextGen Professional
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      The ServiceNow NextGen Professionals Training Program is a dynamic 
                      and immersive 10-week training initiative designed to expand the pool 
                      of skilled ServiceNow professionals. This comprehensive program focuses 
                      on various specialized areas, including ITSM, ServiceNow Platform 
                      Configuration and Customization, Flow Designer, Service Portal, 
                      Scripting, Mobile Development, IntegrationHub, Performance Analytics, 
                      and Application Development.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}         
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - Current
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Software Engineer Student
                        <span className="separator" />
                        <span className="font-weight-700">
                          42 Coding School - Adelaide
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Immersed within a collaborative peer-to-peer learning environment, 
                      I actively cultivate my programming prowess in C and C++ through engaging 
                      in hands-on projects. The curriculum is thoughtfully designed around 
                      project-based learning, empowering students to conquer real-world coding 
                      challenges while equipping them to thrive in the dynamic tech industry.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        FullStack Development Certificate
                        <span className="separator" />
                        <span className="font-weight-700">
                          Udemy
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Developed a full-stack application by leveraging a powerful tech stack 
                      consisting of ReactJS, Redux, NodeJS with the Express JS framework, EJS template and MongoDB as the database
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Web Development Certificates
                        <span className="separator" />
                        <span className="font-weight-700">
                          Khoa Pham Academy
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      Enrolled in immersive training programs that delved into both frontend and backend 
                      development. 
                      These comprehensive courses covered two vital areas: <br />
                      1. Frontend Web Development - crafting dynamic and interactive user interfaces, 
                      utilizing the latest tools and techniques included HTML, CSS, JavaScript, <br />
                      2. PHP and MySQL Web Development - building dynamic websites 
                      and applications, harnessing the power of PHP and MySQL for efficient data 
                      management and interactivity
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2003 - 2008
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor of Engineering
                        <span className="separator" />
                        <span className="font-weight-700">
                          University of Technology
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Bachelor degree in environmental engineering, specializing in 
                        the design of pollution control systems for wastewater, waste, and 
                        air emissions.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">reactjs</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">redux</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">jquery</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Bootstrap</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">nodejs</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">expressjs</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">MongoDB</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">PHP</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">mysql</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">C</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
