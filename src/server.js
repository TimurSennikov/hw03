import express from 'express';

import { postRouter } from './routers/post.js';

const app = express();

app.use("/posts", postRouter);

app.listen(8000, "127.0.0.1");