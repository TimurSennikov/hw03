import { Handlers } from "../handlers/handlers_types.js";

import { Router } from "express";

export function createRouter(handlers: Handlers): Router {
    const postRouter = Router();

    postRouter.get("/", handlers.getPostsHandler);
    postRouter.get("/:id", handlers.getPostByIdHandler);
    postRouter.post("/", handlers.createPostHandler);

    return postRouter;
}