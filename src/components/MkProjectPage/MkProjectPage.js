import React from "react";
import TopBar from "../TopBar/TopBar";
import Divider from "../Divider/Divider";
import AlignedSection from "../AlignedSection/AlignedSection";
import ProjectTitle from "../ProjectTitle/ProjectTitle.js";
import ProjectSummary from "../ProjectSummary/ProjectSummary.js";
import Button from "../Button/Button";

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
        - a file called poster.png
        - a folder called final, containing 1, 2, or 4 images
        - a folder called sketches, containing 1, 2, or 4 images
    )

TODO: also store in graphql the lists of projects
*/
export default function MkProjectPage(props) {
    return (
        <div>
            <TopBar />
            <ProjectTitle
                title={ props.info.title }
                timeline={ props.info.timeline }
                category={ props.info.category }
            />
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Project Overview"
                body=""
            >
                <ProjectSummary
                    description={ props.info.description }
                    team={ props.info.team }
                    partner={ props.info.partner }
                    timeline={ props.info.timeline }
                />
            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Final Design"
                body={ props.info.final }
            >

            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Sketches and Idea Explorations"
                body={ props.info.sketches }
            >

            </AlignedSection>
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Want to Join?"
                body={ props.info.recruitment }
            >
                <Button
                    text={ props.info.contact[0] }
                    href={ props.info.contact[1] }
                    height="60"
                    width="100%"
                />
                <Button
                    text="DFA D-List Sign Up"
                    href="https://www.google.com"
                    height="60"
                    width="100%"
                />
            </AlignedSection>
            <div style={{marginBottom: "72px"}}></div>
        </div>
    );
}