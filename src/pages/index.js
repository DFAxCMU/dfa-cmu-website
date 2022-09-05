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
import NiceButton from "../components/NiceButton/NiceButton";
import "./style.css";
import "./index.css";
import { StaticImage } from "gatsby-plugin-image";

const homeBanner = "../images/misc/homeBanner.png";
const teach = "../images/misc/teach.jpg";
const collaborate = "../images/misc/collaborate.jpg";
const contribute = "../images/misc/contribute.JPG";

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
const avaniImg = "../images/misc/avani.jpg";
const mariImg = "../images/misc/mari.jpg";
const juliannaImg = "../images/misc/julianna.jpg";
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
                left={ 
                    <StaticImage
                        src={ homeBanner }
                        alt="Drawing of a scottish terrior welcoming you to DFAxCMU"
                        className="home-img"
                    />
                }
                right={
                    <>
                    <h2 className="lightText">Interdisciplinary. <br></br> Innovative. <br></br>Kind.</h2>
                    <p className="lightText" style={{padding: "0px"}}>Design For America @ Carnegie Mellon University is a group of interdisciplinary students who use their unique design, engineering, and social sciences perspectives to confront social issues in innovative ways.</p>
                    </>
                }
            >
            </AlignedSectionMid>
            <Divider />
            <div className="container">
                <h2 style={{ paddingLeft: "20px" }}>Our Mission</h2>
            </div>
            <div className="index-aligned-sections">
                <AlignedSection
                    imgLeft={ false }
                    img = {<StaticImage
                        src={ teach }
                        alt="drawing of someone with the human-centered design steps around them"
                        className="home-img"
                    />}
                    title = "Teach Human-Centered Design"
                    body= "As a chapter of national DFA, we teach members the design process and emphasize the importance of empathy and intentional problem solving."
                >   
                </AlignedSection>

                <Divider />

                <AlignedSection
                    imgLeft={ true }
                    img={
                        <StaticImage
                            src={ collaborate }
                            alt="Drawing of people from the design, hci, business, and engineering disciplines"
                            className="home-img"
                        />
                    }
                    title="Interdisciplinary Collaboration"
                    body="By collaborating in teams of students from a variety of majors with diverse backgrounds and interests, we develop well-rounded solutions and fuse collaboration, leadership, and creativity."
                >
                </AlignedSection>

                <Divider />

                <AlignedSection
                    imgLeft={ false }
                    img={
                        <StaticImage
                            src={ contribute }
                            alt="logos of community partners"
                            className="home-img"
                        />
                    }
                    title = "Contribute to Societal Good"
                    body= "Student-led teams partner closely with local community organizations. Together, students and organizations identify challenging social issues to design and develop comprehensive solutions that benefit the broader community."
                >   
                </AlignedSection>
            </div>

            <Divider />

            <AlignedSectionMid
                hasCoverImage={ false }
                left= {
                    <>
                    <h2 class="lightText">How to Join</h2>
                    <div className="join-buttons">
                        <NiceButton 
                            text="D-List Sign Up"
                            href="https://lists.andrew.cmu.edu/mailman/listinfo/dfa-cmu-2021"
                            body="Join our d-list to get emails about meetings and events"
                        />
                        <NiceButton 
                            text="Schedule"
                            href="https://www.dfaxcmu.org/schedule/"
                            body="Come to our studio meetings throughout the school year!"
                        />
                        <NiceButton 
                            text="Instagram"
                            href="https://www.instagram.com/dfaxcmu/"
                            body="Follow us on Instagram to follow project teams on their progress"
                        />
                    </div>
                    </>
                }
                right = {
                    <>
                    <h2 class="lightText">How to Partner</h2>
                    <div className="join-buttons">
                        <NiceButton 
                            text="Email"
                            href="mailto: carnegiemellon@designforamerica.com"
                            body="Send us an email and we would love to have a conversation!"
                        />
                        <NiceButton 
                            text="Partner Overview"
                            href="https://drive.google.com/file/d/1PhFUCG3Sop-MuSLc0lYx4YoaoLdrD_Nm/view?usp=sharing"
                            body="View a summary of what a partnership would look like"
                        />
                        <NiceButton 
                            text="Partner Doc"
                            href="https://drive.google.com/file/d/1ISb5cXanmW8bEUktGF-PdsurCGDNO6O-/view?usp=sharing"
                            body="View a detailed document of what a partnership would look like"
                        />
                    </div>
                    </>
                }
            />
            <Divider />
            <div className="container">
                <h2 style={{ paddingLeft: "20px" }}>Our Team</h2>
            </div>
            <div className="container">
                <h3><span className="accent" style={{ paddingLeft: "20px" }}>Executive</span> Board</h3>
            </div>
            <div className="container">
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
            </div>
            <div className="container">
                <h3><span className="accent" style={{ paddingLeft: "20px" }}>Project</span> Leads</h3>
            </div>
            <div className="container">
            <div className="profile-box">
                <Profile
                    role="Footbridge for Families Lead"
                    name="Avani Guduri"
                    class="Sophomore"
                    major="Cognitive Science + HCI"
                    img={ <StaticImage src={ avaniImg } alt="image of Avani Guduri" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="HCI Institute at CMU Lead"
                    name="Sherry Chen"
                    class="Junior"
                    major="Information Systems 
                    + HCI, Design, and CS Minor"
                    img={ <StaticImage src={ tasnimImg } alt="image of Tasnim Rida" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="The Hazelwood Initiative Lead"
                    name="Mari Zhang"
                    class="Sophmore"
                    major="Business Administration, HCI"
                    img={ <StaticImage src={ mariImg } alt="image of Mari Zhang" imgStyle={{ borderRadius: '100%' }}/> }
                />
                <Profile
                    role="The Wellness Collective Lead"
                    name="Julianna Bolivar"
                    class="Junior"
                    major="Design + HCI"
                    img={ <StaticImage src={ juliannaImg } alt="image of Julianna Bolivar" imgStyle={{ borderRadius: '100%' }}/> }
                />
            </div>
            </div>
            <Divider />
            <div style={{marginBottom: "72px"}}></div>
            <div className = "footer-background">
                <div className="footer">
                    <h3>Design for America x CMU</h3>
                    <div className="socials-contact">
                        <Socials />
                    </div>
                    <h3>Sign up for our D-List</h3>
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
                    </div>
                </div>  
           </div>
        </div>
   
  )
};

export default IndexPage;