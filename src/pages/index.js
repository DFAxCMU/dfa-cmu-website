import React from "react";
import { Helmet } from "react-helmet";
import TopBar from "../components/TopBar/TopBar";
import Socials from "../components/Socials/Socials";
import NiceBullet from "../components/NiceBullet/NiceBullet";
import Divider from "../components/Divider/Divider";
import Profile from "../components/Profile/Profile";
import AlignedSection from "../components/AlignedSection/AlignedSection";
import Button from "../components/Button/Button";
import "./style.css";
import "./index.css";
import { StaticImage } from "gatsby-plugin-image";

const b1Img = "../images/misc/bullet1.png";
const b2Img = "../images/misc/bullet2.png";
const b3Img = "../images/misc/bullet3.png";
const ericaImg = "../images/misc/erica.jpeg";
const crystalImg = "../images/misc/crystal.jpg";
const kellyImg = "../images/misc/kelly.jpg";
const spoorthiImg = "../images/misc/spoorthi.jpg";
const thienImg = "../images/misc/thien.jpg";

const favicon16 = "../images/misc/favicon16.png";
const favicon32 = "../images/misc/favicon32.png";
const favicon64 = "../images/misc/favicon64.png";

const communityStyles = {
    backgroundColor: "white",
    height: "100px",
    width: "220px",
    marginTop: "10px"
};

const IndexPage = () => {
    return (
        <div id="index">
            <Helmet>
                <title>Design for America @ CMU</title>
                <meta
                    charSet="utf-8"
                    name="description"
                    content="The Design for America chapter at Carnegie Mellon University"
                    link={ [
                        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${ favicon16 }` },
                        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${ favicon32 }` },
                        { rel: 'icon', type: 'image/png', sizes: '64x64', href: `${ favicon64 }` }
                    ] }
                />
            </Helmet>
            <TopBar />
            <AlignedSection
                hasCoverImage={ true }
            >
                <h2>Our <span className="accent">Mission</span></h2>
                <p>Design For America x CMU is a group of interdisciplinary students who use their unique design, engineering, and social sciences perspectives to confront social issues in innovative ways. </p>
                <NiceBullet
                    title="Human-Centered Design"
                    body={ <p>
                        As a chapter of national DFA, we empathize and work with our users as we research, ideate, prototype, test and develop solutions. Learn more about the human-centered design process&nbsp;
                        <a className="highlight-link" target="_blank_" href="https://guides.loft.io/dfa-design/">here</a>.
                    </p>}
                    img={ <StaticImage src={ b1Img } alt="" /> }
                />
                <NiceBullet
                    title="Collaboration"
                    body="By collaborating in teams of students with diverse backgrounds and interests, we develop well-rounded solutions and fuse collaboration, leadership, and creativity."
                    img={ <StaticImage src={ b2Img } alt="" /> }
                />
                <NiceBullet
                    title="Social Good"
                    body={ <p>
                        Student-led teams partner closely with local community organizations to identify challenging social issues to design and develop comprehensive solutions that benefit the broader community. We tackle extraordinary challenges in health, economy, education, and environment. Learn more about our community partners&nbsp;
                        <a className="highlight-link" href="/#partners">here</a>.
                    </p>}
                    img={ <StaticImage src={ b3Img } alt="" /> }
                />
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
            <Divider />
            <h2><span className="accent">Executive</span> Board</h2>
            <div className="profile-box">
                <Profile
                    role="President"
                    name="Erica Fu"
                    class="Sophomore"
                    major="Information Systems"
                    img={ <StaticImage src={ ericaImg } alt="" /> }
                />
                <Profile
                    role="PR Chair"
                    name="Crystal Lee"
                    class="Junior"
                    major="Computer Science"
                    img={ <StaticImage src={ crystalImg } alt="" /> }
                />
                <Profile
                    role="Technology Chair"
                    name="Kelly Wang"
                    class="Junior"
                    major="Computer Science"
                    img={ <StaticImage src={ kellyImg } alt="" /> }
                />
                <Profile
                    role="Project Manager"
                    name="Spoorthi Cherivirala"
                    class="Sophomore"
                    major="Computer Science &amp; Design"
                    img={ <StaticImage src={ spoorthiImg } alt="" /> }
                />
                <Profile
                    role="Design Chair"
                    name="Thien Le"
                    class="Sophomore"
                    major="Design"
                    img={ <StaticImage src={ thienImg } alt="" /> }
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
                    height="35"
                    width="250px"
                />
                <Button
                    text="Erica's Email"
                    href="mailto:efu@andrew.cmu.edu"
                    height="35"
                    width="250px"
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