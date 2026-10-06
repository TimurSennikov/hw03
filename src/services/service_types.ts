export interface Service {
    getAllPosts: (category: string, take: number) => Promise<any>,
    getPostById: (id: number) => Promise<any>,
    addNewPost: (title: string, content: string, author : string | undefined, category: string | undefined) => Promise<string>
};