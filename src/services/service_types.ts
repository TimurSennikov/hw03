import { NewPost, Post } from "../repositories/post.js";

export interface Service {
    getAllPosts: (category: string, take: number) => Post[],
    getPostById: (id: number) => Post | undefined,
    addNewPost: (title: string, content: string, author : string | undefined, category: string | undefined) => Promise<string>
};