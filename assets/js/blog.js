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
        const button =document.createElement('button');
        button.textContent = '✕';
        blogArea.appendChild(article);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(h4);
        article.appendChild(button);
    };

};

//Add click event to artical button
blogArea.addEventListener('click',function(event){
    const element =event.target;
    if (element.matches('button') === true){
       const index = element.parentElement.getAttribute('data-index');
       console.log(index);
       blogposts.splice(index,1);
       
       localStorage.setItem('blogs',JSON.stringify(blogposts));
       renderBlogs();
    }
})


function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (storedBlogs !== null) {
        blogposts = storedBlogs;
    };   
    renderBlogs();
};

init();


  