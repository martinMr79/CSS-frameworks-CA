import { updatePost } from "../api/posts/index.mjs";

/**
 * Stores user input as an object when form is submitted
 */

export function setUpdatePostListener() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href)
  const id = url.searchParams.get("id");

  if (form) {

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id; 

      // Send it to the API
      updatePost(post);
    });
  }
}