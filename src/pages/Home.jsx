import React from 'react';
import { posts } from '../data/posts';

export const Home = () => {
  return (
    <div>
      <div className="container my-10 mx-auto px-4">
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="list flex flex-col text-[#333]">
              <div className="post mb-8 border p-4 border-gray-300">
                <div className="postInfo flex justify-between">
                  <div className="postDate !text-xs !text-[#888]">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="postCategories flex">
                    {post.categories.map((category) => (
                      <div
                        key={category}
                        className="border rounded px-1.5 py-1 text-sm text-[#06C] border-[#06C] mr-2"
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="postTitle text-2xl mt-2 mb-4">
                  {`APIで取得した${post.title}`}
                </p>
                <div
                  className="postBody line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
