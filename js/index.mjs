import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { updatePost } from "./api/posts/update.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  setRegisterFormListener();
}

updatePost({
    id: 3147,
    title: "Hello World UPDATED",
    body: "This is an UPDATED example post"
})



