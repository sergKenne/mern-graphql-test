import { Container } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Grid, Paper, Box, Typography, Button} from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { getProduct } from '../GRAPHQL/Query';
import Laoding from '../components/Laoding';
import Error from '../components/Error';

const ButtonBlock = styled(Button)({
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '2px',
    color: '#000',
    fontSize: 18,
    '& .MuiButton-endIcon': {
        border: '1px solid #576d82',
        color: '#fff',
        backgroundColor: '#576d82',
        padding: '8px',
        borderRadius: '50%',
        '&:hover': {
            backgroundColor: '#edf7d3',
            color: '#000',
        },
    },
});

const Detail = (props) => {
    const {id} = useParams()
    console.log("id",id);
    
    const { loading, error, data } = useQuery(getProduct, {variables:{id}});
    
    console.log("loading:", loading);
    console.log('data:', data);
    if (loading) return <Laoding />
    if (error) return <Error />
    
    const { name, brand, price, image, rating, description, material, size, countInStock,
            numReviews } = data.getProduct;
          
    return (
        <>
            <Container maxWidth="md" style={{ marginTop: '10px' }}>
                <Link to="/">
                    <Button>Go Back</Button>
                </Link>
            </Container>

            <Container maxWidth="md" style={{ marginTop: '60px' }}>
                <Paper>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <img className="detail-img" src={image} alt={name} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box mx={2} pb={3}>
                                <Typography variant="h6" component="h6" mb={1}>
                                    {name}
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    {description}
                                </Typography>
                                <Stack py={0.5}>
                                    <Rating
                                        size="small"
                                        name="half-rating-read"
                                        defaultValue={rating}
                                        precision={0.5}
                                        readOnly
                                    />
                                </Stack>
                                <Box mb={0.5}>
                                    <Typography variant="subtitle2" component="span">
                                        Reviews :
                                    </Typography>
                                    <Typography variant="body2" component="span" marginX={0.5}>
                                        {numReviews}
                                    </Typography>
                                </Box>
                                <Box mb={0.5}>
                                    <Typography variant="subtitle2" component="span">
                                        countInStock :
                                    </Typography>
                                    <Typography variant="body2" component="span" marginX={0.5}>
                                        {countInStock}
                                    </Typography>
                                </Box>
                                <ButtonBlock>{price} $</ButtonBlock>
                                <Box mb={0.5}>
                                    <Typography variant="subtitle2" component="span">
                                        Brand:
                                    </Typography>
                                    <Typography variant="body2" component="span" marginX={0.5}>
                                        {brand}
                                    </Typography>
                                </Box>
                                <Box mb={0.5}>
                                    <Typography variant="subtitle2" component="span">
                                        Material :
                                    </Typography>
                                    <Typography variant="body2" component="span" marginX={0.5}>
                                        {material}
                                    </Typography>
                                </Box>
                                <Box mb={0.5}>
                                    <Typography variant="subtitle2" component="span">
                                        Size :
                                    </Typography>
                                    <Typography variant="body2" component="span" marginX={0.5}>
                                        {size}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};

export default Detail;
