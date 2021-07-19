import React from "react";
import TopBar from "../components/TopBar/TopBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { graphql } from "gatsby";

const ArchivedProjects = ({ data }) => {
  return (
    <div>
    <TopBar />
    <div className="project-box">
      { data.allArchivedSummaryCsv.edges.map(edge => {
        return (<ProjectCard
          id={ edge.node.ID }
          href={ "/" + edge.node.ID }
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
    query Query {
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
    }
  `