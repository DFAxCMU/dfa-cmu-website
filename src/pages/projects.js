import React from "react";
import TopBar from "../components/TopBar/TopBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Tag from "../components/Tag/Tag";
import { graphql } from "gatsby";

const Projects = ({ data }) => {
  // formatting for the image data retrieved from GraphQL
  const imgObject = {};
  data.covers.edges.forEach(edge => {
    imgObject[edge.node.relativeDirectory] = edge.node.childImageSharp.gatsbyImageData;
  });

  return (
    <div>
      <TopBar />
      <div className="container">
        <h2 className="accent">Projects</h2>
      </div>
      
      <div className="projectPage">
        { data.allArchivedSummaryCsv.edges.map(edge => {
          const name = edge.node.ID;
          return (<ProjectCard
            key={ name }
            href={ "/" + name }
            coverImg={ imgObject[name] }
            title={ edge.node.title }
            // timeline={ edge.node.timeline }
            category={ edge.node.category }
            team={ edge.node.team }
            body={ edge.node.summary }
            // date= { edge.node.date }
          />);
        }) }
      </div>
      <div style={{marginBottom: "72px"}}></div>
    </div>
  )
};
  
export default Projects;
  
// get information about current projects and their cover images
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