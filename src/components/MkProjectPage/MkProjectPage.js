import React from "react";
import TopBar from "../TopBar/TopBar";
import Divider from "../Divider/Divider";
import AlignedSection from "../AlignedSection/AlignedSection";
import DesignSection from "../DesignSection/DesignSection";
import DesignSection2022 from "../DesignSection2022/DesignSection2022";
import ProjectTitle from "../ProjectTitle/ProjectTitle.js";
import ProjectSummary from "../ProjectSummary/ProjectSummary.js";
import Button from "../Button/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.css";
import AlignedSectionMid from "../AlignedSectionMid/AlignedSectionMid";

/*  MkProjectPage is a component acting as a template for any project page.
    gatsby-node.js creates a new page for each project that exists in GraphQL,
    and passes the project information as an object called pageContext.
*/

// function to format a string to include hyperlinks
// (selects a word that starts with "http" and continues to the end of the line)
function findLink(formatted, str) {
    const i = str.search("http");

    if (i >= 0) {
        // found a url at index i
        formatted.push(str.slice(0, i));

        const url = str.slice(i);
        formatted.push(<a className="highlight-link" target="_blank_" href={ url }>{ url }</a>);

        return formatted;
    } else {
        // didn't find a url
        formatted.push(str);
        return formatted;
    }
}

// function to formas a string to include newlines, bullet points, and website
// links. Used for all text on the project page.
function formatText(str) {
    if (!str) return str;

    // replace \n in the string with <br />
    let formatted = [];
    const lines = str.split("\\n");

    for (let line of lines) {
        // make a bullet whenever there's a \b in the string
        let bullets = line.split("\\b");

        formatted = findLink(formatted, bullets[0]); // first entry isn't a bullet

        bullets.shift(); // removes the non-bullet
        if (bullets.length === 0) {
            // if there was only text, no bullets, include a break
            formatted.push(<br />);
        } else {
            // otherwise, add an unordered list
            let lis = bullets.map(bullet => <li>{ findLink([], bullet) }</li>);
            formatted.push(<ul>{ lis }</ul>);
        }
    }

    return formatted; 
}

export default function MkProjectPage({ pageContext }) {
    // search for each type of image from the list of images in pageContext
    const imgList = pageContext.images.edges;
    const posterEdge = imgList.find((edge, index) => edge.node.childImageSharp.gatsbyImageData.images.fallback.src.includes("poster"));
    const finalEdge = imgList.find((edge, index) => edge.node.childImageSharp.gatsbyImageData.images.fallback.src.includes("final"));
    const extraEdge = imgList.find((edge, index) => edge.node.childImageSharp.gatsbyImageData.images.fallback.src.includes("extra"));
    const sketchesEdge = imgList.find((edge, index) => edge.node.childImageSharp.gatsbyImageData.images.fallback.src.includes("sketches"));
    const prototypesEdge = imgList.find((edge, index) => edge.node.childImageSharp.gatsbyImageData.images.fallback.src.includes("prototypes"));

    return ( 
        <div className="project-page">
            <TopBar />
            <ProjectTitle
                hasCoverImage={ false }
                title={ formatText(pageContext.info.title) }
                category={ formatText(pageContext.info.category) }
                description={ formatText(pageContext.info.description) }
                team={ formatText(pageContext.info.team) }
                partner={ formatText(pageContext.info.partner) }
                timeline={ formatText(pageContext.info.timeline) }
            >
                { posterEdge ?
                    <div>
                        <div className="project-poster">
                            <GatsbyImage image={ getImage(posterEdge.node) } alt="project poster" />
                        </div>
                        <Divider />
                    </div>
                    :
                    // display nothing if there is no poster image
                    <div></div>
                }
            </ProjectTitle>
            { pageContext.info.recruitment ?
                <div>
                    <Divider />
                    <AlignedSection
                        hasCoverImage={ false }
                        title="Want to Join?"
                        body=""
                    >
                        <div className="contact-buttons">
                            <p>{ formatText(pageContext.info.recruitment) }</p>
                            { pageContext.info.contactEmail ?
                                <Button
                                    text={ formatText(pageContext.info.contactLbl) || "Email contact" }
                                    href={ "mailto:" + pageContext.info.contactEmail }
                                    height="35"
                                    width="250px"
                                />
                                :
                                // display nothing if there is no contact information
                                <div></div>
                            }
                            <Button
                                text="DFA D-List Sign Up"
                                href="https://lists.andrew.cmu.edu/mailman/listinfo/dfa-cmu-2021"
                                height="35"
                                width="250px"
                            />
                        </div>
                    </AlignedSection>
                </div>
                :
                // display nothing if there is no recruitment message
                <div></div>
            }
            { finalEdge ?
                // if there is an image associated with the final design,
                // display it
                <div>
                    <Divider />
                    <AlignedSection
                        hasCoverImage={ false }
                        title="Final Design"
                        body={ formatText(pageContext.info.final) }
                    >
                        <GatsbyImage image={ getImage(finalEdge.node) } alt="image of the project's final solution" />
                        { extraEdge ?
                            <GatsbyImage image={ getImage(extraEdge.node) } alt="a second image of the project's final solution" />
                            :
                            // display nothing if there is no second image
                            <div></div>
                        }
                    </AlignedSection>
                </div>
                :
                // if there isn't an image associated with the final design,
                // check if there's text associated with it
                pageContext.info.final ?
                <div>
                    <Divider />
                    <AlignedSection
                        hasCoverImage={ false }
                        title="Final Design"
                    >
                        <p className="large-body">{ formatText(pageContext.info.final) }</p>
                    </AlignedSection>
                </div>
                :
                // display nothing if there isn't an image or text associated
                // with the final design
                <div></div>
            }
            { (pageContext.info.howCanWes || pageContext.info.assumptions
              || pageContext.info.personas || pageContext.info.insights
              || pageContext.info.howCanWeFinal || pageContext.info.designReqs
              || sketchesEdge || pageContext.info.sketches
              || prototypesEdge || pageContext.info.prototypes
              || pageContext.info.quotes || pageContext.info.nextSteps) ?
                <div>
                    <Divider />
                    <div className="container">
                        <h3 className="accent" style={{padding: "20px"}}>Human-Centered Design Process</h3>
                    </div>
                </div>
                :
                // display nothing if there is nothing on the design process
                <div></div>
            }

            { pageContext.info.processLink ?
                <div>
                    <div className="container">
                        <Button
                            text={ "In Depth Process" }
                            href={ pageContext.info.processLink }
                        />
                    </div>
                </div>
                :
                // display nothing if there isn't an image or text associated
                // with the final design
                <div></div>
            }

            { pageContext.info.identify ?
                <div>
                    <DesignSection2022
                        designStep="Identify"
                        leftContent={ formatText(pageContext.info.howCanWes) }
                        rightContent={ formatText(pageContext.info.identify) }
                    />
                    <DesignSection2022
                        designStep="Immerse"
                        leftContent={ formatText(pageContext.info.howCanWes) }
                        rightContent={ formatText(pageContext.info.immerse) }
                    />
                    <DesignSection2022
                        designStep="Reframe"
                        leftContent={ formatText(pageContext.info.howCanWes) }
                        rightContent={ formatText(pageContext.info.reframe) }
                    />
                    <DesignSection2022
                        designStep="Ideate"
                        leftContent={ formatText(pageContext.info.howCanWes) }
                        rightContent={ formatText(pageContext.info.ideate) }
                    />
                    <DesignSection
                        designStep="Build"
                        leftContent={ formatText(pageContext.info.howCanWes) }
                        rightContent={ formatText(pageContext.info.build) }
                    />
                    <DesignSection
                        designStep="Test"
                        leftContent={ formatText(pageContext.info.howCanWes) }
                        rightContent={ formatText(pageContext.info.test) }
                    />
                </div>
                :
                // display nothing if there isn't an image or text associated
                // with the final design
                <div>
                </div>
            }

            <DesignSection
                designStep="Identify"
                leftContent={ formatText(pageContext.info.howCanWes) }
                rightContent={ formatText(pageContext.info.assumptions) }
            />
            <DesignSection
                designStep="Immerse"
                leftContent={ formatText(pageContext.info.personas) }
                rightContent={ formatText(pageContext.info.insights) }
            />
            <DesignSection
                designStep="Reframe"
                leftContent={ formatText(pageContext.info.howCanWeFinal) }
                rightContent={ formatText(pageContext.info.designReqs) }
            />
            <DesignSection
                designStep="Ideate"
                leftContent={ formatText(pageContext.info.sketches) }
                rightContent={ sketchesEdge }
            />
            <DesignSection
                designStep="Build"
                leftContent={ formatText(pageContext.info.prototypes) }
                rightContent={ prototypesEdge }
            />
            <DesignSection
                designStep="Test"
                leftContent={ formatText(pageContext.info.quotes) }
                rightContent={ formatText(pageContext.info.nextSteps) }
            />
            <div style={{marginBottom: "72px"}}></div>
        </div>
    );

}