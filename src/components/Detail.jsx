import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';

export const Detail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div>
      <div className="max-w-3xl my-10 mx-auto px-4 pu-4">
        <img src={post.thumbnailUrl} alt="" />
        <div className="mb-8 p-4 border-gray-300">
          <div className="flex justify-between">
            <div className="text-xs text-[#888]">
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className="flex gap-2">
              {post.categories.map((category) => (
                <div
                  key={category}
                  className="border rounded px-1.5 py-1 text-sm text-[#06C] border-[#06C]"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-2xl mt-2 mb-4">{`APIで取得した${post.title}`}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
};
