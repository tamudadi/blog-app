import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts`
        );
        const { posts } = await res.json();
        setPosts(posts);
      } catch (error) {
        console.error(error);
        setError('記事の取得に失敗しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>読み込み中...</div>;
  if (!posts) return <div>記事が見つかりません</div>;

  return (
    <div>
      <div className="max-w-3xl my-10 mx-auto px-4">
        <ul className="flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.id} className="flex flex-col text-[#333]">
              <Link to={`/posts/${post.id}`}>
                <div className=" border p-4 border-gray-300">
                  <div className="flex justify-between">
                    <div className="text-xs text-[#888]">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex gap-2">
                      {post.categories.map((category) => (
                        <div
                          key={category}
                          className="border rounded px-1.5 py-1 text-sm text-[#06C] border-[#06C] "
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-2xl mt-2 mb-4">
                    {`APIで取得した${post.title}`}
                  </p>
                  <div
                    className="line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
