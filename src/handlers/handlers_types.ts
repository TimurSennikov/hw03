import { Request, Response } from 'express';

export interface Handlers {
    getPostsHandler: (req: Request, res: Response) => Promise<any>,
    getPostByIdHandler: (req: Request, res: Response) => Promise<any>,
    createPostHandler: (req: Request, res: Response) => Promise<any>
}