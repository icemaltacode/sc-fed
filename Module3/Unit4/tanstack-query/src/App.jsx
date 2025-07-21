import { useState } from "react";
import PostsList1 from "./PostsList1.jsx";
import PostsList2 from "./PostsList2.jsx";
import Post from "./Post.jsx";
import { CreatePost } from "./CreatePost.jsx";
import { PostListPaginated } from "./PostListPaginated.jsx";
import { PostListInfinite } from "./PostListInfinite.jsx";
import { useQueryClient } from '@tanstack/react-query';
import { getPost } from './api/posts';

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  const queryClient = useQueryClient();

  function onHoverPostOneLink() {
    queryClient.prefetchQuery({ queryKey: ['posts', 1], queryFn: () => getPost(1)})
  }

  return (
    <div>
      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <button onMouseEnter={onHoverPostOneLink} onClick={() => setCurrentPage(<Post id={1} />)}>
        First Post
      </button>
      <button
        onClick={() =>
          setCurrentPage(<CreatePost setCurrentPage={setCurrentPage} />)
        }
      >
        New Post
      </button>
      <button onClick={() => setCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => setCurrentPage(<PostListInfinite />)}>
        Post List Infinite
      </button>
      <br />
      {currentPage}
    </div>
  );
}

export default App;
