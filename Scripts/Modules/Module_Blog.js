let post1 = `Lorem ipsum dolor sit amet. Ut aliquam nemo sed reiciendis eveniet qui possimus aperiam aut officiis maxime est veniam labore qui 
dicta consectetur. Et nihil quod qui temporibus dolores et veritatis velit est quia provident eos saepe ipsum. Non modi numquam et minus 
voluptatem ut magni provident nam dolore nemo. Sit repudiandae reprehenderit ut corporis eligendi est ipsa deserunt qui nisi tempora vel dolore 
soluta est veritatis incidunt qui accusantium sint. Et laboriosam repellat aut harum tempore non repellat galisum qui laudantium suscipit qui 
fugit necessitatibus vel mollitia voluptatem. Vel iusto laboriosam At dolorem autem ut assumenda accusantium et quia quae. Quo molestiae atque 
eos pariatur dolores est porro eveniet sed Quis provident? Et unde architecto sit soluta minus ut doloremque deleniti sit eaque adipisci. Et 
repellendus obcaecati hic quia nisi sit natus magni eum commodi repellendus. Ea accusamus dolor et consequatur minima non accusamus explicabo 
aut sunt quae qui voluptas omnis et nihil iure.`;

let post2 = `Lorem ipsum dolor sit amet. Ut aliquam nemo sed reiciendis eveniet qui possimus aperiam aut officiis maxime est veniam labore qui 
dicta consectetur. Et nihil quod qui temporibus dolores et veritatis velit est quia provident eos saepe ipsum. Non modi numquam et minus 
voluptatem ut magni provident nam dolore nemo. Sit repudiandae reprehenderit ut corporis eligendi est ipsa deserunt qui nisi tempora vel dolore 
soluta est veritatis incidunt qui accusantium sint. Et laboriosam repellat aut harum tempore non repellat galisum qui laudantium suscipit qui 
fugit necessitatibus vel mollitia voluptatem. Vel iusto laboriosam At dolorem autem ut assumenda accusantium et quia quae. Quo molestiae atque 
eos pariatur dolores est porro eveniet sed Quis provident? Et unde architecto sit soluta minus ut doloremque deleniti sit eaque adipisci. Et 
repellendus obcaecati hic quia nisi sit natus magni eum commodi repellendus. Ea accusamus dolor et consequatur minima non accusamus explicabo 
aut sunt quae qui voluptas omnis et nihil iure.`;


let titleArray = ["my First Blog", "Second Blog"];
let dateArray = ["2022-07-23", "2022-08-08"];
let postArray = [post1, post2];

// object van posts maken


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
    container.setAttribute("class", "text solidBackground flex vertical fullWidth")
    
    let blogTitle = document.createElement("h1");
    blogTitle.classList.add("blogHeading");
    blogTitle.setAttribute("title", "post"+blogs.length);
    blogTitle.setAttribute("id", "title"+blogs.length);
    blogTitle.setAttribute("onclick", "hideBlog(this)")
    blogTitle.innerHTML = title +" "+ date;

    let blogContent = document.createElement("p");
    blogContent.setAttribute("class", "padding hide");
    blogContent.id = blogTitle.title;
    blogContent.innerHTML = content;

    container.appendChild(blogTitle);
    container.appendChild(blogContent);
    blogs.unshift(container);
}


if (titleArray.length != dateArray.length || titleArray.length != postArray || dateArray.length != postArray) 
{
    for (let i = 0; i < titleArray.length; i++) 
    {
        createPost(titleArray[i], new Date(dateArray[i]).toLocaleDateString(), postArray[i]);
    }
}
else
{
    console.log("You're missing data!");
    console.log(titleArray.length, dateArray.length, postArray.length);
}

showPosts();
let latestPost = document.getElementById("title"+ (blogs.length-1));
hideBlog(latestPost);