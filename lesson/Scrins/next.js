function initFetchPost(id = 0) {
    let postId = id;
     async function fetchPost(type) {
         postId =  type === 'increment' ? postId + 1  : postId -1;
      postId = postId < 1 ? 1 : postId;
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          if (!response.ok) throw new Error("Ошибка загрузки поста");
          const post = await response.json();
          document.getElementById("post-title").innerText = post.title;
          document.getElementById("post-body").innerText = post.body;
      } catch (error) {
          console.error(error);
      }
      
      return fetchPost;
  }
  
  return fetchPost;
}

document.addEventListener('DOMContentLoaded', () => {
    const fetchPost = initFetchPost();

  document.getElementById("prev").addEventListener("click", () => {
          fetchPost('decrement');
  });

  document.getElementById("next").addEventListener("click", () => {
      fetchPost('increment');
  });


})



  fetchPost('increment');