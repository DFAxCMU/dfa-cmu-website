import React from "react";
import TopBar from "../TopBar/TopBar";
import Divider from "../Divider/Divider";
import AlignedSection from "../AlignedSection/AlignedSection";
import ProjectTitle from "../ProjectTitle/ProjectTitle.js";
import ProjectSummary from "../ProjectSummary/ProjectSummary.js";
import Button from "../Button/Button";
import "./style.css";

// formats a string to include hyperlinks
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

// formats a string to include newlines, bullet points, and website links
function formatText(str) {
    if (str === "") return str;

    // replace \n in the string with <br />
    let formatted = [];
    const lines = str.split("\\n");

    for (let line of lines) {
        // make a bullet whenever there's a \b in the string
        let bullets = line.split("\\b");

        formatted = findLink(formatted, bullets[0]); // first entry isn't a bullet

        bullets.shift(); // removes the non-bullet
        if (bullets.length == 0) {
            // if there was only text, no bullets, include a break
            formatted.push(<br />);
        } else {
            // otherwise, add an unordered list
            let lis = bullets.map(bullet => <li>{ bullet }</li>);
            formatted.push(<ul>{ lis }</ul>);
        }
    }

    return formatted; 
}

export default function MkProjectPage({ pageContext }) {
    const imgList = pageContext.images.edges.map(edge => edge.node.childImageSharp.gatsbyImageData.images.fallback.src);
    const posterPath = imgList.find((path, index) => path.includes("poster"));
    const finalPath = imgList.find((path, index) => path.includes("final"));
    const sketchesPath = imgList.find((path, index) => path.includes("sketches"));

    return (
        <div className="project-page">
            <TopBar />
            <ProjectTitle
                title={ formatText(pageContext.info.title) }
                timeline={ formatText(pageContext.info.timeline) }
                category={ formatText(pageContext.info.category) }
            />
            { posterPath ?
                <div className="project-poster">
                    <img src={ posterPath } alt="" />
                </div>
                :
                <div></div>
            }
            <Divider />
            <AlignedSection
                hasCoverImage={ false }
                title="Project Overview"
                body=""
            >
                <ProjectSummary
                    description={ formatText(pageContext.info.description) }
                    team={ formatText(pageContext.info.team) }
                    partner={ formatText(pageContext.info.partner) }
                    timeline={ formatText(pageContext.info.timeline) }
                />
            </AlignedSection>
            { finalPath ?
                <div>
                    <Divider />
                    <AlignedSection
                        hasCoverImage={ false }
                        title="Final Design"
                        body={ formatText(pageContext.info.final) }
                    >
                        <img src={ finalPath } alt="" />
                    </AlignedSection>
                </div>
                :
                <div></div>
            }
            { sketchesPath ?
                <div>
                    <Divider />
                    <AlignedSection
                        hasCoverImage={ false }
                        title="Sketches and Idea Explorations"
                        body={ formatText(pageContext.info.sketches) }
                    >
                        <img src={ sketchesPath } alt="" />
                    </AlignedSection>
                </div>
                :
                <div></div>
            }
            { pageContext.info.recruitment ?
                <div>
                    <Divider />
                    <AlignedSection
                        hasCoverImage={ false }
                        title="Want to Join?"
                        body={ formatText(pageContext.info.recruitment) }
                    >
                            <Button
                                text={ formatText(pageContext.info.contactLbl) }
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