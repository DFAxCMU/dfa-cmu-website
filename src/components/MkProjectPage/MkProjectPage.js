import React from "react";
import TopBar from "../TopBar/TopBar";
import Divider from "../Divider/Divider";
import AlignedSection from "../AlignedSection/AlignedSection";
import ProjectTitle from "../ProjectTitle/ProjectTitle.js";
import ProjectSummary from "../ProjectSummary/ProjectSummary.js";
import Button from "../Button/Button";
import "./style.css";

export default function MkProjectPage({ pageContext }) {
    const imgList = pageContext.images.edges.map(edge => edge.node.childImageSharp.gatsbyImageData.images.fallback.src);
    const posterPath = imgList.find((path, index) => path.includes("poster"));
    const finalPath = imgList.find((path, index) => path.includes("final"));
    const sketchesPath = imgList.find((path, index) => path.includes("sketches"));

    return (
        <div className="project-page">
            <TopBar />
            <ProjectTitle
                title={ pageContext.info.title }
                timeline={ pageContext.info.timeline }
                category={ pageContext.info.category }
            />
            <div className="project-poster">
                <img src={ posterPath } alt="" />
            </div>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Project Overview"
                body=""
            >
                <ProjectSummary
                    description={ pageContext.info.description }
                    team={ pageContext.info.team }
                    partner={ pageContext.info.partner }
                    timeline={ pageContext.info.timeline }
                />
            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Final Design"
                body={ pageContext.info.final }
            >
                <img src={ finalPath } alt="" />
            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Sketches and Idea Explorations"
                body={ pageContext.info.sketches }
            >
                <img src={ sketchesPath } alt="" />
            </AlignedSection>
            { pageContext.info.recruitment ?
                <div>
                    <Divider />
                    <AlignedSection
                        hasCoverImage={ false }
                        title="Want to Join?"
                        body={ pageContext.info.recruitment }
                    >
                            <Button
                                text={ pageContext.info.contactLbl }
                                href={ "mailto:" + pageContext.info.contactEmail }
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