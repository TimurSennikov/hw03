import { getById } from "../repositories/post.js";
import { getAllPosts, getPostById, addNewPost } from "../services/post.js";

export async function getPostsHandler(req, res) {
    let { category, take } = req.query;

    if((category && category.length <= 0) || (take && !Number.parseInt(take))) {
        return res.status(400).json("Invalid data provided.");
    }

    if(take) {
        take = Number.parseInt(take);
    }

    return res.status(200).json(getAllPosts(category, take));
}

export async function getPostByIdHandler(req, res) {
    let { id } = req.params;

    if(!id || Number.parseInt(id) == undefined) {
        console.log(Number.parseInt(id));
        return res.status(400).json({ok: false});
    }

    id = Number.parseInt(id);

    return getById(id) ? getById(id) : res.status(404).json({ok: false});
}

export async function createPostHandler(req, res) {
    let { title, content, author, category } = req.body;

    if((!title) || (!content)) {
        return res.status(422).json("Invalid data provided.");
    }

    await addNewPost(title, content, author, category);
    return res.status(201).json(getById(id));
}