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
                                howCanWes
                                assumptions
                                personas
                                insights
                                howCanWeFinal
                                designReqs
                                sketches
                                prototypes
                                quotes
                                nextSteps
                                recruitment
                                contactLbl
                                contactEmail
                                ID
                            }
                        }
                    }
                    images: allFile(filter: {ext: {ne: ".csv"}}) {
                        projects: group(field: relativeDirectory) {
                            dir: fieldValue
                            edges {
                                node {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                            }
                        }
                    }
                }`
            ).then(result => {
                result.data.projects.edges.forEach(edge => {
                    const projectImgs = result.data.images.projects.find((group, index) => {
                        if(group.dir === edge.node.ID)
                            return true;
                    });
                    createPage({
                        path: `${ edge.node.ID }`,
                        component: ProjectPage,
                        context: {
                            info: edge.node,
                            images: projectImgs
                        }
                    });
                })
            })
        )
    })
};