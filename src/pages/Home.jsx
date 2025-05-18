import React from 'react';

// const dummyPost = {
//   id: 1,
//   title: '記事タイトル１',
//   thumbnailUrl: 'https://placehold.jp/800x400.png',
//   createdAt: '2023-09-11T09:00:00.000Z',
//   categories: ['React', 'TypeScript'],
//   content: `
//     本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
// };

export const Home = () => {
  return (
    <div>
      <div className="container my-10 mx-auto px-4">
        <ul>
          <li className="list flex flex-col text-[#333]">
            <div className="post mb-8 border p-4 border-gray-300">
              <div className="postInfo flex justify-between">
                <div className="postDate !text-xs !text-[#888]">2025/5/17</div>
                <div className="postCategories border rounded px-1.5 py-1 text-sm text-[#06C] border-[#06C] mr-2">
                  React
                </div>
              </div>
              <h3 className="postTitle text-2xl mt-2 mb-4">
                APIで取得した記事タイトル1
              </h3>
              <p className="postBody line-clamp-2">
                ほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶん
              </p>
            </div>
          </li>
          <li className="list flex flex-col text-[#333]">
            <div className="post mb-8 border p-4 border-gray-300">
              <div className="postInfo flex justify-between">
                <div className="postDate !text-xs !text-[#888]">2025/5/17</div>
                <div className="postCategories border rounded px-1.5 py-1 text-sm text-[#06C] border-[#06C] mr-2">
                  React
                </div>
              </div>
              <h3 className="postTitle text-2xl mt-2 mb-4">
                APIで取得した記事タイトル1
              </h3>
              <p className="postBody line-clamp-2">
                ほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶんほんぶん
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
