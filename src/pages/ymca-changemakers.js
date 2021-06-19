import React from "react";
import { graphql } from "gatsby";
import MkProjectPage from "../components/MkProjectPage/MkProjectPage";

const info = {
  title: "YMCA\nChangemakers",
  timeline: "1 semester, Fall 2020",
  category: "Experience Design / Prototype Design / Social Innovation",
  description: "YMCA Youth Changemakers are determined to make positive social impact in their communities. The goal of the project is to create program based solutions that can engage and empower youths to be changemakers in their community in both virtual and in-person spaces.",
  team: "Team Lead: Michelle Sun\nDesigners: Spoorthi Cherivirala, Rachel Legg, Thien Le, Robyn Lee",
  partner: "YMCA",
  final: "The Changemaker Challenge, a half-day event where students collaborate with like-minded peers and non-profit organizations on a community project. In doing so, the team hopes teens gain access to social good groups and connect with other teens that share their interests.",
  sketches: "Looking at past projects, we targeted \"How Can We?\" questions and qualifications that we want our solution to have in order to come up with our own new prototype.",
  recruitment: "We are looking for anyone interested in learning how to involve kids in impacting their community. If you are interested in this, community involvement, or have particular skillsets in experience design or drawing, contact our team lead Michelle Sun.",
  contactLbl: "Michelle's Email",
  contactEmail: "michells@andrew.cmu.edu"
}

const Changemakers = () => {
  return (
    <div>
      <MkProjectPage info={ info } />
    </div>
  );
};
  
export default Changemakers;
export const query = graphql`
  allTestCsv {
    edges {
      node {
        title
        timeline
        category
        description
        team
        partner
        final
        sketches
        recruitment
        contactLbl
        contactEmail
        folder
      }
    }
  }
`;