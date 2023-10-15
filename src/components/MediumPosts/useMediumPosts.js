import { useState, useEffect } from "react";

function useMediumPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hekimcanaktas",
        );
        const data = await response.json();
        setPosts(data.items);
      } catch (error) {
        console.error("There was an error fetching the posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
}

export default useMediumPosts;
