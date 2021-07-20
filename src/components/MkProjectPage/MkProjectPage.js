import React from "react";
import TopBar from "../TopBar/TopBar";
import Divider from "../Divider/Divider";
import AlignedSection from "../AlignedSection/AlignedSection";
import ProjectTitle from "../ProjectTitle/ProjectTitle.js";
import ProjectSummary from "../ProjectSummary/ProjectSummary.js";
import Button from "../Button/Button";
import "./style.css";
import poster from "../../images/ymca-changemakers/poster.png";
import final from "../../images/ymca-changemakers/final.png";
import sketches from "../../images/ymca-changemakers/sketches.png";

export default function MkProjectPage({ pageContext }) {
    return (
        <div className="project-page">
            <TopBar />
            <ProjectTitle
                title={ pageContext.title }
                timeline={ pageContext.timeline }
                category={ pageContext.category }
            />
            <div className="project-poster">
                <img src={ poster } alt="" />
            </div>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Project Overview"
                body=""
            >
                <ProjectSummary
                    description={ pageContext.description }
                    team={ pageContext.team }
                    partner={ pageContext.partner }
                    timeline={ pageContext.timeline }
                />
            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Final Design"
                body={ pageContext.final }
            >
                <img src={ final } alt="" />
            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Sketches and Idea Explorations"
                body={ pageContext.sketches }
            >
                <img src={ sketches } alt="" />
            </AlignedSection>
            { pageContext.recruitment ?
                <div>
                    <Divider />
                    <AlignedSection
                        hasCoverImage={ false }
                        title="Want to Join?"
                        body={ pageContext.recruitment }
                    >
                            <Button
                                text={ pageContext.contactLbl }
                                href={ "mailto:" + pageContext.contactEmail }
                                height="60"
                                width="100%"
                            />
                        <Button
                            text="DFA D-List Sign Up"
                            href="https://forms.gle/6WQ7a9FkK64cTUZk9"
                            height="60"
                            width="100%"
                        />
                    </AlignedSection>
                </div>
                :
                <div></div>
            }
            <div style={{marginBottom: "72px"}}></div>
        </div>
    );
}