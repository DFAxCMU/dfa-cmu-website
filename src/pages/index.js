import React from "react";
import TopBar from "../components/TopBar/TopBar";
import NiceBullet from "../components/NiceBullet/NiceBullet";
import Divider from "../components/Divider/Divider";
import Profile from "../components/Profile/Profile";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import AlignedSection from "../components/AlignedSection/AlignedSection";
import Button from "../components/Button/Button";
import "./style.css";

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
                    title="Third Thing"
                    body="dummy text"
                />
                <NiceBullet
                    title="Fourth Thing"
                    body="dummy text"
                />
            </AlignedSection>
            <Divider />
            <Profile
                role="President"
                name="Erica Fu"
                class="Sophomore"
                major="Information Systems"
            />
            <Button
                text="D-List Sign Up"
                href="https://www.google.com"
                height="35"
                width="250"
            />
            <Button
                text="D-List Sign Up"
                href="https://www.google.com"
                height="130"
                width="360"
            />
            <ProjectCard
                title="YMCA Changemakers"
                category="Social Impact and Community Engagement"
                team="Michelle Sun, Spoorthi Cherivirala, Thien Le, Rachel Legg, Robyn Lee"
                body="dummy text"
            />
        </div>
  )
};

export default IndexPage;
