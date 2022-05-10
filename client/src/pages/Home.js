/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { getAllProducts } from '../GRAPHQL/Query';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Card from '../components/Card';
import Laoding from '../components/Laoding';
import Error from '../components/Error';

const Home = ({ searchInput }) => {
    const { loading, error, data } = useQuery(getAllProducts);
    const [products, setProducts] = useState([])

    useEffect(() => {
        data && setProducts(data.getAllProducts);
    }, [data])
    
    useEffect(() => {
        function filterProducts() {
            const newProducts = [];

            data && data.getAllProducts.forEach(prod => {
                if (prod.name.toLowerCase().includes(searchInput.toLowerCase())) {
                    newProducts.push(prod)
                } else if (prod.brand.toLowerCase().includes(searchInput.toLowerCase())) {
                    newProducts.push(prod);
                }
            });
            setProducts(newProducts)
        }
        filterProducts();
    }, [searchInput]);

    if (loading) return <Laoding />;
    if (error) return <Error />;
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} marginTop={2}>
                <Grid container spacing={3}>
                    {products.map((product) => {
                        return <Card product={product} key={product.id} />;
                    })}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home