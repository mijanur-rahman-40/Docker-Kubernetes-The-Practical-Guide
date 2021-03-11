import express from 'express';

import { connectToDatabase } from './helpers.mjs';

const app = express();

app.get('/', (request, response) => {
    response.send('<h1>Hi there</h1>');
});

await connectToDatabase();