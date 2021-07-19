import React from "react";
import TopBar from "../TopBar/TopBar";
import Divider from "../Divider/Divider";
import AlignedSection from "../AlignedSection/AlignedSection";
import ProjectTitle from "../ProjectTitle/ProjectTitle.js";
import ProjectSummary from "../ProjectSummary/ProjectSummary.js";
import Button from "../Button/Button";
import "./style.css";

/*
TODO: make compatible with graphql so the following info can be acquired:
- title
- timeline
- category
- description
- team (in array format, have to change setup if not possible)
- partner
- final design text ("final")
- sketches and idea explorations text ("sketches")
- recruitment text ("recruitment")
- contact (first entry: name of button. second entry: href)
- folder (the folder in images that will hold...
        - a folder called display, containing 1-2 images/videos
        - a folder called final, containing 1-4 images/videos
        - a folder called sketches, containing 1-4 images/videos
    )

TODO: also store in graphql the lists of projects
*/
export default function MkProjectPage({ pageContext }) {
    return (
        <div>
            <TopBar />
            <ProjectTitle
                title={ pageContext.title }
                timeline={ pageContext.timeline }
                category={ pageContext.category }
            />
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

            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Sketches and Idea Explorations"
                body={ pageContext.sketches }
            >

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