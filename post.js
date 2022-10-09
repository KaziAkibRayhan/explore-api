function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayLoadPosts(data))
}

function displayLoadPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const { userId, title, body } = post;
        postElement.innerHTML = `
            <h3>User: ${userId} </h3>
            <h4>Post Title : ${title}</h4>
            <p>Post Description: ${body}</p>
            `;
        postContainer.appendChild(postElement);

    }
}

loadPost();