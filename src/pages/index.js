import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Socials from "../components/Socials/Socials";
import NiceBullet from "../components/NiceBullet/NiceBullet";
import Divider from "../components/Divider/Divider";
import Profile from "../components/Profile/Profile";
import AlignedSection from "../components/AlignedSection/AlignedSection";
import Button from "../components/Button/Button";
import "./style.css";
import "./index.css";

const communityStyles = {
    backgroundColor: "white",
    height: "100px",
    width: "220px",
    marginTop: "10px"
};

const IndexPage = () => {
    return (
        <div id="index">
            <TopBar />
            <AlignedSection
                hasCoverImage={ true }
            >
                <h2>Our <span className="accent">Mission</span></h2>
                <p>Design For America x CMU is a group of interdisciplinary students who use their unique design, engineering, and social sciences perspectives to confront social issues in innovative ways. </p>
                <NiceBullet
                    title="Human-Centered Design"
                    body="As a chapter of national DFA, we empathize and work with our users as we research, ideate, prototype, test and develop solutions. "
                />
                <NiceBullet
                    title="Collaboration"
                    body="By collaborating in teams of students with diverse backgrounds and interests, we develop well-rounded solutions and fuse collaboration, leadership, and creativity."
                />
                <NiceBullet
                    title="Social Good"
                    body="Student-led teams partner closely with local community organizations to identify challenging social issues to design and develop comprehensive solutions that benefit the broader community. We tackle extraordinary challenges in health, economy, education, and environment. "
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
            <Divider />
            <h2><span className="accent">Executive</span> Board</h2>
            <div className="profile-box">
                <Profile
                    role="President"
                    name="Erica Fu"
                    class="Sophomore"
                    major="Information Systems"
                />
                <Profile
                    role="PR Chair"
                    name="Crystal Lee"
                    class="Junior"
                    major="Computer Science"
                />
                <Profile
                    role="Technology Chair"
                    name="Kelly Wang"
                    class="Junior"
                    major="Computer Science"
                />
                <Profile
                    role="Project Manager"
                    name="Spoorthi Cherivirala"
                    class="Sophomore"
                    major="Computer Science &amp; Design"
                />
                <Profile
                    role="Design Chair"
                    name="Thien Le"
                    class="Sophomore"
                    major="Design"
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
                    height="130"
                    width="360px"
                />
                <Button
                    text="Erica's Email"
                    href="mailto:efu@andrew.cmu.edu"
                    height="130"
                    width="360px"
                />
            </div>
                <Socials />
            <div style={{marginBottom: "72px"}}></div>
        </div>
  )
};

export default IndexPage;
