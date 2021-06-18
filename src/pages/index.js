import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Socials from "../components/Socials/Socials";
import NiceBullet from "../components/NiceBullet/NiceBullet";
import Divider from "../components/Divider/Divider";
import Profile from "../components/Profile/Profile";
import AlignedSection from "../components/AlignedSection/AlignedSection";
import Button from "../components/Button/Button";
import "./style.css";

const communityStyles = {
    backgroundColor: "black",
    height: "100px",
    width: "220px",
    marginTop: "10px"
};

const IndexPage = () => {
    return (
        <div>
            <TopBar />
            <AlignedSection
                hasCoverImage={ true }
            >
                <h2>Our <span className="accent">Mission</span></h2>
                <NiceBullet
                    title="Collaboration"
                    body="dummy text"
                />
                <NiceBullet
                    title="Social Good"
                    body="dummy text"
                />
                <NiceBullet
                    title="dummy text"
                    body="dummy text"
                />
                <NiceBullet
                    title="dummy text"
                    body="dummy text"
                />
            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ true }
            >
                <h2>How to <span className="accent">Join</span></h2>
                <p className="small-body">dummy text</p>
                <p className="small-body">dummy text</p>
                <Button
                    text="D-List Sign Up"
                    href="https://www.google.com"
                    height="35"
                    width="250px"
                />
            </AlignedSection>
            <Divider />
            <h2><span className="accent">Executive</span> Board</h2>
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
            <Divider />
            <h2><span className="accent">Community</span> Partners</h2>
            <div style={ communityStyles }>

            </div>
            <div style={ communityStyles }>

            </div>
            <div style={ communityStyles }>

            </div>
            <div style={ communityStyles }>

            </div>
            <div style={ communityStyles }>

            </div>
            <Divider />
            <h2><span className="accent">Contact</span> Us</h2>
            <Button
                text="D-List Sign Up"
                href="https://www.google.com"
                height="130"
                width="360px"
            />
            <Button
                text="Erica's Email"
                href="https://www.google.com"
                height="130"
                width="360px"
            />
            <Socials />
            <div style={{marginBottom: "72px"}}></div>
        </div>
  )
};

export default IndexPage;
