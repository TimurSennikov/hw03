import { NewPost } from "../../repositories/post";

export interface Repository {
    getAll: (category: string | undefined, take: number | undefined) => Promise<any>,
    getById: (id: number) => Promise<any>,
    addPost: (post: NewPost) => Promise<string>
};