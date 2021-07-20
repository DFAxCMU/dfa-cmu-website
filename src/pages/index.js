import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Socials from "../components/Socials/Socials";
import NiceBullet from "../components/NiceBullet/NiceBullet";
import Divider from "../components/Divider/Divider";
import Profile from "../components/Profile/Profile";
import AlignedSection from "../components/AlignedSection/AlignedSection";
import Button from "../components/Button/Button";
import { graphql } from "gatsby";
import "./style.css";
import "./index.css";

const communityStyles = {
    backgroundColor: "white",
    height: "100px",
    width: "220px",
    marginTop: "10px"
};

/*
            <AlignedSection
                hasCoverImage={ true }
            >
                <h2>Our <span className="accent">Mission</span></h2>
                <p>Design For America x CMU is a group of interdisciplinary students who use their unique design, engineering, and social sciences perspectives to confront social issues in innovative ways. </p>
                <NiceBullet
                    title="Human-Centered Design"
                    body="As a chapter of national DFA, we empathize and work with our users as we research, ideate, prototype, test and develop solutions. "
                    src={ data.b1.childImageSharp.fixed.src }
                />
                <NiceBullet
                    title="Collaboration"
                    body="By collaborating in teams of students with diverse backgrounds and interests, we develop well-rounded solutions and fuse collaboration, leadership, and creativity."
                    src={ data.b2.childImageSharp.fixed.src }
                />
                <NiceBullet
                    title="Social Good"
                    body="Student-led teams partner closely with local community organizations to identify challenging social issues to design and develop comprehensive solutions that benefit the broader community. We tackle extraordinary challenges in health, economy, education, and environment. "
                    src={ data.b3.childImageSharp.fixed.src }
                />
                <p>
                    <a target="_blank_" href="https://guides.loft.io/dfa-design/">Learn more about the human-centered design process</a> or <a href="/#partners">Learn more about our community partners</a>.
                </p>
            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ true }
            >
                <h2>How to <span className="accent">Join</span></h2>
                <p>Join our d-list and come to our studio meetings in the fall!</p>
                <div className="join-buttons">
                    <Button
                        text="D-List Sign Up"
                        href="https://forms.gle/6WQ7a9FkK64cTUZk9"
                        height="35"
                        width="250px"
                    />
                    <Button
                        text="Schedule"
                        href="/schedule"
                        height="35"
                        width="250px"
                    />
                </div>
            </AlignedSection>
*/

const IndexPage = ({ data }) => {
    return (
        <div id="index">
            <TopBar />
            <div style={{width: "800px"}}>
                <h2>Our <span className="accent">Mission</span></h2>
                <p>Design For America x CMU is a group of interdisciplinary students who use their unique design, engineering, and social sciences perspectives to confront social issues in innovative ways. </p>
                <NiceBullet
                    title="Human-Centered Design"
                    body={ <p className="highlight-link">
                        As a chapter of national DFA, we empathize and work with our users as we research, ideate, prototype, test and develop solutions. Learn more about the human-centered design process&nbsp;
                        <a target="_blank_" href="https://guides.loft.io/dfa-design/">here</a>.
                    </p>}
                    src={ data.b1.childImageSharp.fixed.src }
                />
                <NiceBullet
                    title="Collaboration"
                    body="By collaborating in teams of students with diverse backgrounds and interests, we develop well-rounded solutions and fuse collaboration, leadership, and creativity."
                    src={ data.b2.childImageSharp.fixed.src }
                />
                <NiceBullet
                    title="Social Good"
                    body={ <p className="highlight-link">
                        Student-led teams partner closely with local community organizations to identify challenging social issues to design and develop comprehensive solutions that benefit the broader community. We tackle extraordinary challenges in health, economy, education, and environment. Learn more about our community partners&nbsp;
                        <a href="/#partners">here</a>.
                    </p>}
                    src={ data.b3.childImageSharp.fixed.src }
                />

            </div>
            <Divider />
            <div>
                <h2>How to <span className="accent">Join</span></h2>
                <p>Join our d-list and come to our studio meetings in the fall!</p>
                <div className="join-buttons">
                    <Button
                        text="D-List Sign Up"
                        href="https://forms.gle/6WQ7a9FkK64cTUZk9"
                        height="35"
                        width="250px"
                    />
                    <Button
                        text="Schedule"
                        href="/schedule"
                        height="35"
                        width="250px"
                    />
                </div>
            </div>
            <Divider />
            <h2><span className="accent">Executive</span> Board</h2>
            <div className="profile-box">
                <Profile
                    role="President"
                    name="Erica Fu"
                    class="Sophomore"
                    major="Information Systems"
                    src={ data.erica.childImageSharp.fixed.src }
                />
                <Profile
                    role="PR Chair"
                    name="Crystal Lee"
                    class="Junior"
                    major="Computer Science"
                    src={ data.crystal.childImageSharp.fixed.src }
                />
                <Profile
                    role="Technology Chair"
                    name="Kelly Wang"
                    class="Junior"
                    major="Computer Science"
                    src={ data.kelly.childImageSharp.fixed.src }
                />
                <Profile
                    role="Project Manager"
                    name="Spoorthi Cherivirala"
                    class="Sophomore"
                    major="Computer Science &amp; Design"
                    src={ data.spoorthi.childImageSharp.fixed.src }
                />
                <Profile
                    role="Design Chair"
                    name="Thien Le"
                    class="Sophomore"
                    major="Design"
                    src={ data.thien.childImageSharp.fixed.src }
                />
            </div>
            <Divider />
            <h2 id="partners"><span className="accent">Community</span> Partners</h2>
            <h3>Coming Soon!</h3>
            <Divider />
            <h2><span className="accent">Contact</span> Us</h2>
            <div className="contact-box">
                <Button
                    text="D-List Sign Up"
                    href="https://forms.gle/6WQ7a9FkK64cTUZk9"
                    height="100"
                    width="350px"
                />
                <Button
                    text="Erica's Email"
                    href="mailto:efu@andrew.cmu.edu"
                    height="100"
                    width="350px"
                />
                <div className="spacer"></div>
                <div className="socials-contact">
                    <Socials />
                </div>
            </div>
            <div style={{marginBottom: "72px"}}></div>
        </div>
  )
};

export default IndexPage;

  export const query = graphql`
    query IndexQuery {
      erica: file(relativePath: {eq: "misc/erica.jpeg"}) {
          childImageSharp {
              fixed {
                  src
              }
          }
      }
      crystal: file(relativePath: {eq: "misc/crystal.jpg"}) {
          childImageSharp {
              fixed {
                  src
              }
          }
      }
      kelly: file(relativePath: {eq: "misc/kelly.jpg"}) {
          childImageSharp {
              fixed {
                  src
              }
          }
      }
      spoorthi: file(relativePath: {eq: "misc/spoorthi.jpg"}) {
          childImageSharp {
              fixed {
                  src
              }
          }
      }
      thien: file(relativePath: {eq: "misc/thien.jpg"}) {
          childImageSharp {
              fixed {
                  src
              }
          }
      }
      b1: file(relativePath: {eq: "misc/bullet1.png"}) {
          childImageSharp {
              fixed {
                  src
              }
          }
      }
      b2: file(relativePath: {eq: "misc/bullet2.png"}) {
          childImageSharp {
              fixed {
                  src
              }
          }
      }
      b3: file(relativePath: {eq: "misc/bullet3.png"}) {
          childImageSharp {
              fixed {
                  src
              }
          }
      }
    }
  `