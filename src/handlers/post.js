import { getById } from "../repositories/post.js";
import { getAllPosts, addNewPost } from "../services/post.js";
export async function getPostsHandler(req, res) {
    let { category, take } = req.query;
    if ((!category || category.length == undefined || category.length == 0) || (!take || !Number.parseInt(take))) {
        return res.status(400).json("Invalid data provided.");
    }
    category = category.toString();
    take = take.toString();
    if (take) {
        let take_n = Number.parseInt(take);
        return res.status(200).json(getAllPosts(category, take_n));
    }
    return res.status(200).json(getAllPosts(category, Number.parseInt(take)));
}
export async function getPostByIdHandler(req, res) {
    let { id } = req.params;
    let idn = Number.parseInt(id);
    if (!idn) {
        return res.status(400).json({ ok: false });
    }
    return getById(idn) ? getById(idn) : res.status(404).json({ ok: false });
}
export async function createPostHandler(req, res) {
    let { title, content, author, category } = req.body;
    if ((!title) || (!content)) {
        return res.status(422).json("Invalid data provided.");
    }
    await addNewPost(title, content, author, category);
    return res.status(201).json({ ok: true });
}
