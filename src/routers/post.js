import { getPostsHandler, getPostByIdHandler, createPostHandler } from "../handlers/post.js";

import { Router } from "express";

export const postRouter = Router();

postRouter.get("/", getPostsHandler);
postRouter.get("/:id", getPostByIdHandler);
postRouter.post("/", createPostHandler);