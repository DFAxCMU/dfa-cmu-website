import React from "react";
import TopBar from "../components/TopBar/TopBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { graphql } from "gatsby";

const ArchivedProjects = ({ data }) => {
  const imgObject = {};
  data.covers.edges.forEach(edge => {
    imgObject[edge.node.relativeDirectory] = edge.node.childImageSharp.gatsbyImageData;
  });

  return (
    <div>
    <TopBar />
    <div className="project-box">
      { data.allArchivedSummaryCsv.edges.map(edge => {
        const name = edge.node.ID;
        return (<ProjectCard
          key={ name }
          href={ "/" + name }
          coverImg={ imgObject[name] }
          title={ edge.node.title }
          category={ edge.node.category }
          team={ edge.node.team }
          body={ edge.node.summary }
        />);
      }
      )
      }
    </div>
    <div style={{marginBottom: "72px"}}></div>
    </div>
    )
  };
  
  export default ArchivedProjects;
  
  export const query = graphql`
    query ArchivedQuery {
      allArchivedSummaryCsv {
        edges {
          node {
            title
            category
            team
            summary
            ID
          }
        }
      }
      covers: allFile(filter: {name: {eq: "cover"}}) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              gatsbyImageData(height: 200)
            }
          }
        }
      }
    }
  `