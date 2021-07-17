/*
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type ProjectPage implements Node @dontInfer {
        title: String!
        timeline: String!
        category: String!
        description: String!
        team: String!
        partner: String!
        final: String
        sketches: String
        recruitment: String
        contactLbl: String
        contactEmail: String
        folder: String
    }
    type ProjectSummary implements Node @dontInfer {
        title: String!
        category: String
        team: String
        summary: String
    }
    `;
    createTypes(typeDefs);
};
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
        node,
        name: `slug`,
        value: slug
    });
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
    query Query {
        allArchivedProjects {
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
                    slug
                }
            }
        }
    }
    `);
    result.data.allArchivedProjects.edges.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/components/MkProjectPage.js`),
            context: {
                slug: node.slug
            }
        })
    })
}
*/