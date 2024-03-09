const blogArea = document.querySelector('.blogarea');

let blogposts = [];
//RENDER BLOGS 
function renderBlogs() {
    blogArea.innerHTML = '';
    for (let i = 0; i < blogposts.length; i++) {
        const blogpost = blogposts[i];
        const h3 = document.createElement('h3');
        h3.textContent = blogpost.title;
        const p = document.createElement('p');
        p.textContent = blogpost.content;
        const h4 = document.createElement('h4');
        h4.textContent= 'Posted by:' +blogpost.username;
        const article = document.createElement('article');
        article.setAttribute('data-index',i);
        blogArea.appendChild(article);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(h4);
    
    };

};


function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (storedBlogs !== null) {
        blogposts = storedBlogs;
    };
    renderBlogs();
};

init();