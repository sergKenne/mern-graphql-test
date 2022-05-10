import { gql } from '@apollo/client';

export const getAllProducts = gql`
    {
        getAllProducts {
            id
            name
            image
            rating
            brand
            price
            material
            size
        }
    }
`;

export const getProduct = gql`
    query getDetail($id: ID) {
        getProduct(id: $id) {
            id
            name
            brand
            price
            image
            rating
            description
            material
            size
            countInStock
            numReviews
        }
    }
`;
