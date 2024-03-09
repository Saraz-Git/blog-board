const nameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitBtn =document.querySelector('#submit');

let blogs =[];
 if(localStorage.getItem('blogs') !== null){
    blogs =JSON.parse(localStorage.getItem('blogs'));
    console.log(blogs);
 };





//ADD SUBMIT EVENT FOR FORM
submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    if(nameInput.value===''||titleInput.value===''||content.value.trim()===''){
        return;
    }else{
        let blog ={
            username: nameInput.value,
            title: titleInput.value,
            content: content.value.trim(),
        };
        console.log(blog);
        blogs.push(blog);
        console.log(blogs);
        localStorage.setItem('blogs',JSON.stringify(blogs));
    }; 
});


