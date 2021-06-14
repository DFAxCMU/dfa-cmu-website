import React from "react";
import TopBar from "./TopBar/TopBar";
import NiceBullet from "./NiceBullet/NiceBullet";
import Divider from "./Divider/Divider";
import Profile from "./Profile/Profile";
import ProjectCard from "./ProjectCard/ProjectCard";
import AlignedSection from "./AlignedSection/AlignedSection";
import TeamSummary from "./TeamSummary";

export default function Home(props) {
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
            <div className="button">D-List Sign Up</div>
            <ProjectCard
                title="YMCA Changemakers"
                category="Social Impact and Community Engagement"
                team="Michelle Sun, Spoorthi Cherivirala, Thien Le, Rachel Legg, Robyn Lee"
                body="dummy text"
            />
            <h1>YMCA Changemakers</h1>
            <h3>Fall 2020</h3>
            <h4>Experience Design / Prototype Design / Social Innovation</h4>
            <AlignedSection
                hasCoverImage={ false }
                title="Project Overview"
                body=""
            >
                <TeamSummary
                    description="YMCA Youth Changemakers are determined to make positive social impact in their communities. The goal of the project is to create program based solutions that can engage and empower youths to be changemakers in their community in both virtual and in-person spaces."
                    team={ [["Team Lead", "Michelle Sun"], ["Designers", "Spoorthi Cherivirala, Rachel Legg, Thien Le, Robyn Lee"]] }
                    partner="YMCA"
                    timeline="1 semester, Fall 2020"
                />
            </AlignedSection>
        </div>
    );
}