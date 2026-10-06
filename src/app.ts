import express from 'express';

import { createRouter } from './routers/post.js';
import { createHandlers } from './handlers/post.js';
import { createService } from './services/post.js';
import { createRepository } from './repositories/post.js';

const app = express();

const postRouter = createRouter(createHandlers(createService(createRepository())));

app.use("/posts", postRouter);

app.listen(8000, "127.0.0.1");