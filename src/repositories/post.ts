import { Repository } from "../domain/post/repository";

type Database = typeof import("../prisma/db").db;

export interface NewPost {
    title: string
    category: string | undefined,
    content: string,
    author: string | undefined
};

export function createRepository(db: Database): Repository {
    async function getAll(category: string | undefined = undefined, take: number | undefined = undefined): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let q = await db.orm.public.Post.all();

            if(category) {
                q = q.filter(a => a.category == category)
            }

            if(take) {
                q = q.slice(0, take);
            }

            resolve(q);
        });
    }

    async function getById(id: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let r = await db.orm.public.Post.where({ id: id }).all();

            return r;
        });
    }

    async function addPost(post: NewPost) {
        return new Promise<string>(async (resolve, reject) => {
            await db.orm.public.Post.create({
                author: post.author,
                category: post.category,
                content: post.content,
                title: post.title
            });

            resolve("ok");
        });
    }

    return {
        getAll,
        getById,
        addPost
    };
}