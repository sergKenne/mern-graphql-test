const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        id: ID,
        name: String!
        category: String!
        image: String!
        price: Int!
        countInStock: Int!
        brand: String!
        material: String!
        size: Int!
        rating: Float!
        numReviews: Int!
        description: String!
    }

    type Query {
        getAllProducts: [Product!]!
        getProduct(id: ID) : Product
    }
`;

module.exports = typeDefs;