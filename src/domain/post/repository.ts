import { NewPost, Post } from "../../repositories/post";

export interface Repository {
    getAll: (category: string | undefined, take: number | undefined) => Post[],
    getById: (id: number) => Post | undefined,
    addPost: (post: NewPost) => Promise<string>
};