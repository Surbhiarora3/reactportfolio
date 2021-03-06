import React from "react";
const About = ({resumeData}) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/portfolio/pic.png" alt="Surbhi Pic" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name}</span>
                <br />
                <span>{resumeData.address}</span>
                <br />
                <span>
                  <a href={"mailto:" + resumeData.email}> {resumeData.email}</a>
                </span>
                <br />
                <span>{resumeData.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
