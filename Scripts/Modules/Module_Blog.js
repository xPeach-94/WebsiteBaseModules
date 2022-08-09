
// nothing to enter here
// add blogs to:
// Scripts/BlogPosts/Module_BlogPosts.js

// -------------------------------------------------------------------------------------------------------

let blogId = document.getElementById("blog");

let blogs = []

const hideBlog = function(element)
{
    let postId = element.title
    let post = document.getElementById(postId);

    post.classList.toggle("hide");
}

const showPosts = function()
{
    blogs.forEach(post => 
    {
        blogId.appendChild(post);
    });
}

const createPost = function(title, date, content)
{
    let container = document.createElement("div");
    
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("flex");


    let blogTitle = document.createElement("h1");
    blogTitle.setAttribute("title", "post"+blogs.length);
    blogTitle.classList.add("title");
    blogTitle.setAttribute("id", "title"+blogs.length);
    blogTitle.setAttribute("onclick", "hideBlog(this)")
    blogTitle.innerHTML = title +" "+ date;

    let clickArrow = document.createElement("h1");
    clickArrow.classList.add("arrow");
    clickArrow.setAttribute("title", "post"+blogs.length);
    clickArrow.setAttribute("onclick", "hideBlog(this)")
    clickArrow.innerHTML = "&#8629";

    titleDiv.appendChild(blogTitle);
    titleDiv.appendChild(clickArrow);

    let blogContent = document.createElement("p");
    blogContent.setAttribute("class", "padding hide");
    blogContent.id = blogTitle.title;
    blogContent.innerHTML = content;

    container.appendChild(titleDiv);
    container.appendChild(blogContent);
    blogs.unshift(container);
}

blogArr.forEach(blog => 
{
    createPost(blog.blogTitle, blog.blogDate, blog.blogPost);
});

showPosts();
let latestPost = document.getElementById("title"+ (blogs.length-1));
hideBlog(latestPost);