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

const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const ProjectPage = path.resolve(`src/components/MkProjectPage/MkProjectPage.js`);

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `{
                    projects: allProjectInfoCsv {
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
                }`
            ).then(result => {
                result.data.projects.edges.forEach(edge => {
                    createPage({
                        path: `${edge.node.folder}`,
                        component: ProjectPage,
                        context: edge.node
                    })
                })
            })
        )
    })
};