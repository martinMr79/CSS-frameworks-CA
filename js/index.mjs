import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

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
post.getPosts().then(console.log)

post.getPost(3068).then(console.log)


