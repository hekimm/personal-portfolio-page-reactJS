// useMediumPosts.js
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchMediumPosts } from "../../reducers/mediumPostsSlice";

function useMediumPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.mediumPosts.posts);
  const loading = useSelector((state) => state.mediumPosts.loading);
  const error = useSelector((state) => state.mediumPosts.error);

  useEffect(() => {
    dispatch(fetchMediumPosts());
  }, [dispatch]);

  return { posts, loading, error };
}

export default useMediumPosts;
