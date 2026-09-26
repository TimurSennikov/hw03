import { getAll, getById, addPost } from "../repositories/post.js";

export function getAllPosts(category = undefined, take = undefined) {
    return getAll(category, take);
}

export function getPostById(id) {
    return getById(id);
}

export function addNewPost(title, content, author = undefined, category = undefined) {
    let post = {
        title: title,
        content: content,
        author: author,
        category: category
    };

    return addPost(post);
}