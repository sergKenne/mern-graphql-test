import React from 'react';
import { Grid, Paper, Box, Typography, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

const PaperBlock = styled(Paper)({
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
        elevation: 3,
        boxShadow:'0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
    },
});

const Card = ({ product }) => {
    const { id, image, name, rating, price, brand, material, size } = product;
    return (
        <Grid item xs={6} md={3} lg={2}>
            <PaperBlock elevation={0}>
                <Box paddingY={1} mx={2} borderBottom="1px solid #ddd">
                    <Link to={`/${id}`}>
                        <img className="card-img" src={image} alt={name} />
                    </Link>
                </Box>
                <Box mx={2} py={2}>
                    <Link to={`/${id}`}>
                        <Typography
                            variant="subtitle2"
                            component="p">
                            {name}
                        </Typography>
                    </Link>
                    <Stack py={0.5}>
                        <Rating
                            size="small"
                            name="half-rating-read"
                            defaultValue={rating}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
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
            </PaperBlock>
        </Grid>
    );
};

export default Card;
