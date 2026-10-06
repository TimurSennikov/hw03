import { Repository } from "../domain/post/repository";

export interface Post {
    id: number,
    category: string | undefined,
    title: string,
    content: string,
    author: string | undefined
};

export type NewPost = Omit<Post, "id">;

let posts: Post[] = [];

export function createRepository(): Repository {
    function getAll(category: string | undefined = undefined, take: number | undefined = undefined): Post[] {
        let q = posts;

        if(category) {
            q = q.filter(a => a.category == category)
        }

        if(take) {
            q = q.slice(0, take);
        }

        return q;
    }

    function getById(id: number): Post | undefined {
        let r = posts.find(a => a.id == id);

        return r;
    }

    function addPost(post: NewPost) {
        let n_post: Post = {
            id: posts.length,
            title: post.title,
            category: post.category,
            content: post.content,
            author: post.author
        };

        return new Promise<string>((resolve, reject) => {
            posts.push(n_post);
            resolve("ok");
        });
    }

    return {
        getAll,
        getById,
        addPost
    };
}