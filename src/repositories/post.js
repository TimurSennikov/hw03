let posts = [];

export function getAll(category = undefined, take = undefined) {
    let q = posts;

    if(category) {
        q = q.filter(a => a.category == category)
    }

    if(take) {
        q = q.slice(0, take);
    }

    return q;
}

export function getById(id) {
    let r = posts.find(a => a.id == id);

    return r ? posts[r] : undefined;
}

export function addPost(post) {
    if(!post.id) {
        post.id = posts.length;
    }

    return new Promise((resolve, reject) => {
        posts.push(post);
        resolve();
    });
}