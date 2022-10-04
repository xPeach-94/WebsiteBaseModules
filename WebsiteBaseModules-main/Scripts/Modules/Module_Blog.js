// nothing to enter here
// add blogs to:
// Scripts/BlogPosts/Module_BlogPosts.js

// -------------------------------------------------------------------------------------------------------

let blogId = document.getElementById("blog");

let blogs = [];

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

const createPost = function(title, date, content, imgSrc, imgDirection, imgWidth)
{
    let container = document.createElement("div");
    
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("flexBlog");
    titleDiv.classList.add("border");

    let headerPlaceholder = document.createElement("div");
    headerPlaceholder.style.height = "1px";
    headerPlaceholder.classList.add("centerWidth");

    let blogTitle = document.createElement("h1");
    blogTitle.setAttribute("title", "post"+blogs.length);
    blogTitle.classList.add("title");
    blogTitle.setAttribute("id", "title"+blogs.length);
    blogTitle.setAttribute("onclick", "hideBlog(this)")
    blogTitle.innerHTML = title +" "+ date;

    let clickArrow = document.createElement("h1");
    clickArrow.classList.add("arrow");
    clickArrow.classList.add("centerWidth");
    clickArrow.setAttribute("title", "post"+blogs.length);
    clickArrow.setAttribute("onclick", "hideBlog(this)")
    clickArrow.innerHTML = "&#8629";

    titleDiv.appendChild(headerPlaceholder);
    titleDiv.appendChild(blogTitle);
    titleDiv.appendChild(clickArrow);

    let blogContentContainer = document.createElement("div");
    blogContentContainer.id = blogTitle.title
    blogContentContainer.setAttribute("class", "padding hide border");

    let blogContent = document.createElement("p");
    blogContent.innerHTML = content;

    container.appendChild(titleDiv);

    if (imgSrc != "") 
    {
        blogContentContainer.classList.add("clearfix");

        let blogImgContainer = document.createElement("div");
        blogImgContainer.classList.add("blogImgContainer");
        blogImgContainer.style.width = imgWidth;

        if (imgDirection != "") 
        {
            blogImgContainer.classList.add("imgDirection-"+imgDirection)
        }
        else
        {
            console.log("No image direction given...");
        }

        let blogImg = document.createElement("img");
        blogImg.src = imgSrc;
        blogImg.classList.add("blogImg");

        blogImgContainer.appendChild(blogImg);
        blogContentContainer.appendChild(blogImgContainer);
    }

    blogContentContainer.appendChild(blogContent);
    container.appendChild(blogContentContainer);
    blogs.unshift(container);
}

// -----------------------------------------------------------------------------------------------------------

blogArr.forEach(blog => 
{
    createPost(blog.blogTitle, blog.blogDate, blog.blogPost, blog.img, blog.imgDirection, blog.imgWidth);
});

showPosts();
let latestPost = document.getElementById("title"+ (blogs.length-1));
hideBlog(latestPost);