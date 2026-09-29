;
let posts = [];
export function getAll(category = undefined, take = undefined) {
    let q = posts;
    if (category) {
        q = q.filter(a => a.category == category);
    }
    if (take) {
        q = q.slice(0, take);
    }
    return q;
}
export function getById(id) {
    let r = posts.find(a => a.id == id);
    return r;
}
export function addPost(post) {
    let n_post = {
        id: posts.length,
        title: post.title,
        category: post.category,
        content: post.content,
        author: post.author
    };
    return new Promise((resolve, reject) => {
        posts.push(n_post);
        resolve("ok");
    });
}
