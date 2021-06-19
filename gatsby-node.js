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
*/