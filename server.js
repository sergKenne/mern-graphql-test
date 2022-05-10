require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const path = require('path');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const app = express();
const cors = require('cors');


const productRouter = require('./routes/productRouter');

const dbConnect = require("./db");
dbConnect();


//Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/products', productRouter);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

async function startServer() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start();

    apolloServer.applyMiddleware({ app })

    app.use((req, res) => {
        res.send("Hello from express server")
    })

    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`server run in port ${PORT}`);
    });
}

startServer();
