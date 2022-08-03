import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { graphql } from "gatsby";

const ArchivedProjects = ({ data }) => {
  // formatting for the image data retrieved from GraphQL
  const imgObject = {};
  data.covers.edges.forEach(edge => {
    imgObject[edge.node.relativeDirectory] = edge.node.childImageSharp.gatsbyImageData;
  });

  return (
    <div>
      <h2 className="accent">Archived Projects</h2>
      <div>
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
        }) }
      </div>
      <div style={{marginBottom: "72px"}}></div>
    </div>
  )
};
  
export default ArchivedProjects;
  
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