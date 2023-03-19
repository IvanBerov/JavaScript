function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click',getPostsRequest);
    document.getElementById('btnViewPost').addEventListener('click',displayPosts);
}

async function getPostsRequest() {

    const url = 'http://localhost:3030/jsonstore/blog/posts';
    const response = await fetch(url);
    const data = await response.json();

    const select = document.getElementById('posts');

    Object.values(data).map(createOption).forEach(el => select.appendChild(el));

}

function createOption(post) {

    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;
    return result;
}

function displayPosts() {

    const postId = document.getElementById('posts').value;
    getCommentsByPostId(postId);
}

async function getCommentsByPostId(postId) {

    const postUrl = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const commentsElement = document.getElementById('post-comments');
    commentsElement.innerHTML = '';

    const [postResponse,commentsResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);

    const postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    const commentsData = await commentsResponse.json();
    const comments = Object.values(commentsData).filter(comment => comment.postId === postId);


    comments.map(createComment).forEach(c => commentsElement.appendChild(c));
} 

function createComment(comment) {

const result = document.createElement('li');
result.textContent = comment.text;
result.id = comment.id;
return result;
}

attachEvents();