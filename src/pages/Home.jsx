import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export const Home = () => {
  return (
    <div>
      <div className="max-w-3xl my-10 mx-auto px-4">
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="flex flex-col text-[#333]">
              <Link to={`/posts/${post.id}`}>
                <div className="mb-8 border p-4 border-gray-300">
                  <div className="flex justify-between">
                    <div className="text-xs text-[#888]">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex">
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
