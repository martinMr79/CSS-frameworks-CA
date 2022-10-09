import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
//import * as post from "./api/posts/index.mjs";

import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
import { renderPostTemplate } from "./templates/index.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

//post.createPost()
//post.removePost()
//post.updatePost()
//post.getPost()
//post.getPosts().then(console.log)

async function testTemplate() {
    const posts = await postMethods.getPosts()
    const post = posts.pop()
    const container = document.querySelector("#post")
    renderPostTemplate(post, container)
}


testTemplate()