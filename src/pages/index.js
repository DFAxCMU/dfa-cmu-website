import React from "react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import TopBar from "../components/TopBar/TopBar";
import Socials from "../components/Socials/Socials";
import NiceBullet from "../components/NiceBullet/NiceBullet";
import Divider from "../components/Divider/Divider";
import Profile from "../components/Profile/Profile";
import AlignedSection from "../components/AlignedSection/AlignedSection";
import AlignedSectionMid from "../components/AlignedSectionMid/AlignedSectionMid";
import AlignedSectionRight from "../components/AlignedSectionRight/AlignedSectionRight";
import Button from "../components/Button/Button";
import "./style.css";
import "./index.css";
import { StaticImage } from "gatsby-plugin-image";

const homeImg = "../images/misc/home.png";
const homeLongImg = "../images/misc/homeLong.png";
const joinImg = "../images/misc/homeJoin.png";
const b1Img = "../images/misc/bullet1.png";
const b2Img = "../images/misc/bullet2.png";
const b3Img = "../images/misc/bullet3.png";
const ericaImg = "../images/misc/erica.jpeg";
const tasnimImg = "../images/misc/tasnim.JPG";
const chelseaImg = "../images/misc/chelsea.jpg";
const spoorthiImg = "../images/misc/spoorthi.jpg";
const thienImg = "../images/misc/thien.jpg";
const jaimieImg = "../images/misc/jaimie.jpg";
const foodLogo = "../images/community-partner-logo/412food.jpeg"
const diningLogo = "../images/community-partner-logo/diningServices.png"
const obbLogo = "../images/community-partner-logo/obb.png"
const ymcaLogo = "../images/community-partner-logo/ymca.png"




const IndexPage = () => {
    // Event listener to record the user's screen dimensions
    const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });

    useEffect(() => {
        function handleResize() {
            const { innerWidth: width, innerHeight: height } = window;
            setWindowDimensions({ width, height });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="index">
            <Helmet>
                <title>Design For America at Carnegie Mellon</title>
                <meta
                    charSet="utf-8"
                    name="description"
                    content="The Design for America chapter at Carnegie Mellon University"
                    link={[
                        { rel: 'icon', type: 'image/png', href: `../images/misc/favicon48.png` }
                    ]}
                />
            </Helmet>
            <TopBar />
            <AlignedSectionMid
                hasCoverImage={ true }
                img={ windowDimensions.width < 1300 ?
                    // if the screen is narrow, use the wide version of the image
                    <StaticImage
                        src={ homeImg }
                        alt="drawing of two people with Design for America at Carnegie Mellon University"
                        className="home-img"
                    />
                    :
                    // if the screen is wide, use the tall version of the image
                    <div className="home-long-box">
                        <StaticImage
                            src={ homeLongImg }
                            alt="drawing of two people with Design for America at Carnegie Mellon University"
                            className="home-img"
                        />
                    </div>
                }
            >
              <h2 class="lightText">Interdisciplinary. <br></br> Innovative. <br></br>Kind.</h2>
                <p class= "lightText" className="large-body" style={{ marginTop: "0px" }}>Design For America @ Carnegie Mellon University is a group of interdisciplinary students who use their unique design, engineering, and social sciences perspectives to confront social issues in innovative ways.</p>
            </AlignedSectionMid>
            <Divider />
            <h2>Our Mission</h2>
            <AlignedSection
                hasCoverImage={ false }
                title = {
                    <h3>Teach Human-Centered Design</h3>
                }
                body= {
                    <p>As a chapter of national DFA, we teach members the design process and emphasize the importance of empathy and intentional problem solving. 
                    <br></br><br></br>
                    Learn more about the human-centered design process </p>
                }
            >   
                    <StaticImage
                        src={ homeImg }
                        alt="drawing of two people with Design for America at Carnegie Mellon University"
                        className="home-img"
                    />
            </AlignedSection>

            <Divider />

            <AlignedSectionRight
                hasCoverImage={ true }
                img={
                    <StaticImage
                        src={ joinImg }
                        alt="Join us! An image of four people taking to each other"
                        className="home-img"
                    />
                }
            >
                <div class="missionCard">
                <h3>Interdisciplinary Collaboration</h3>
                <p>By collaborating in teams of students from a variety of majors with diverse backgrounds and interests, we develop well-rounded solutions and fuse collaboration, leadership, and creativity.</p>
                </div>
            </AlignedSectionRight>

            <Divider />

            <AlignedSection
                hasCoverImage={ false }
                title = {
                    <h3>Contribute to Societal Good</h3>
                }
                body= {
                    <p>Student-led teams partner closely with local community organizations. Together, students and organizations identify challenging social issues to design and develop comprehensive solutions that benefit the broader community.</p>
                }
            >   
                    <StaticImage
                        src={ homeImg }
                        alt="drawing of two people with Design for America at Carnegie Mellon University"
                        className="home-img"
                    />
            </AlignedSection>

            <Divider />

            <AlignedSection
                hasCoverImage={ true }
                img={
                    <StaticImage
                        src={ joinImg }
                        alt="Join us! An image of four people taking to each other"
                        className="home-img"
                    />
                }
            >
                <h2>How to <span className="accent">Join</span></h2>
                <p className="large-body" style={{ marginTop: "0px" }}>Join our d-list and come to our studio meetings in the fall!</p>
                <div className="join-buttons">
                    <Button
                        text="D-List Sign Up"
                        href="https://lists.andrew.cmu.edu/mailman/listinfo/dfa-cmu-2021"
                    />
                    <Button
                        text="Schedule"
                        href="/schedule"
                    />
                </div>
            </AlignedSection>
            <Divider />
            <h2>Our Team</h2>
            <h3><span className="accent">Executive</span> Board</h3>
            <div className="profile-box">
                <Profile
                    role="President"
                    name="Erica Fu"
                    class="Junior"
                    major="Information Systems"
                    img={ <StaticImage src={ ericaImg } alt="image of Erica Fu" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="PR Chair"
                    name="Tasnim Rida"
                    class="Sophomore"
                    major="Statistics"
                    img={ <StaticImage src={ tasnimImg } alt="image of Tasnim Rida" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="Technology Chair"
                    name="Chelsea Tang"
                    class="Junior"
                    major="Computer Science &amp; Design"
                    img={ <StaticImage src={ chelseaImg } alt="image of Chelsea Tang" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="Project Manager"
                    name="Spoorthi Cherivirala"
                    class="Junior"
                    major="Computer Science &amp; Design"
                    img={ <StaticImage src={ spoorthiImg } alt="image of Spoorthi Cherivirala" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="Design Chair"
                    name="Thien Le"
                    class="Junior"
                    major="Design"
                    img={ <StaticImage src={ thienImg } alt="image of Thien Le" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="Finance Chair"
                    name="Jaimie Chan"
                    class="Junior"
                    major="Business Administration"
                    img={ <StaticImage src={ jaimieImg } alt="image of Jaimie Chan" imgStyle={{ borderRadius: '100%' }}/> }
                />
            </div>
            <h3><span className="accent">Project</span> Leads</h3>
            <div className="profile-box">
                <Profile
                    role="Project Name Lead"
                    name="Julianna Bolivar"
                    class="Junior"
                    major="Design"
                    img={ <StaticImage src={ ericaImg } alt="image of Erica Fu" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="Project Name Lead"
                    name="Nicole Xiang"
                    class="Sophomore"
                    major="Statistics"
                    img={ <StaticImage src={ tasnimImg } alt="image of Tasnim Rida" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="Project Name Lead"
                    name="Avani Guduri"
                    class="Junior"
                    major="Computer Science &amp; Design"
                    img={ <StaticImage src={ chelseaImg } alt="image of Chelsea Tang" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="Project Name Lead"
                    name="Sherry Chen"
                    class="Junior"
                    major="Computer Science &amp; Design"
                    img={ <StaticImage src={ spoorthiImg } alt="image of Spoorthi Cherivirala" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="Project Name Lead"
                    name="Mari Zhang"
                    class="Junior"
                    major="Design"
                    img={ <StaticImage src={ thienImg } alt="image of Thien Le" imgStyle={{ borderRadius: '100%' }}/> }
                />
            </div>
            <Divider />
            <h2 id="partners"><span className="accent">Community</span> Partners</h2>
            <div className = "community-partner-logos">
                { <StaticImage src={ foodLogo } alt="logo of 412 Food Rescue" className="logo-spacer" /> }
                { <StaticImage src={ diningLogo } alt="logo of CMU Dining Services" className="logo-spacer" /> }
                { <StaticImage src={ obbLogo } alt="logo of Operation Better Block" /> }
                { <StaticImage src={ ymcaLogo } alt="logo of YMCA" className="logo-spacer"/> }
            </div>
            <Divider />
            <h2><span className="accent">Contact</span> Us</h2>
            <div className="contact-box">
                <Button
                    text="D-List Sign Up"
                    href="https://lists.andrew.cmu.edu/mailman/listinfo/dfa-cmu-2021"
                />
                <Button
                    text="Email Contact"
                    href="mailto:carnegiemellon@designforamerica.com"
                />
                <div className="spacer"></div>
                <div className="socials-contact">
                    <Socials />
                </div>
            </div>
            <div style={{marginBottom: "72px"}}></div>
            <div className = "footer">
               <h3>Design for America x CMU</h3>
               <h3>sign up for our D-List</h3>
           </div>  
        </div>
   
  )
};

export default IndexPage;