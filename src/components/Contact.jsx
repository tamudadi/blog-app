import React, { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  //   ### フォームの各項目のバリデーションは以下でお願いします。
  // 名前：入力必須 & 30文字以内
  // メールアドレス：入力必須 & メールアドレスの形式になっていること
  // 本文：入力必須 & 500字以内
  // それぞれが守られていなかったら、送信ボタンを押したタイミングで、エラーメッセージを表示しましょう。

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-10">問い合わせフォーム</h1>
      <form className="gap-6 flex flex-col">
        <div className="flex justify-between items-center w-full ">
          <label htmlFor="name" className="w-[240px]">
            お名前
          </label>
          <input
            className="p-4 border border-gray-300 rounded w-full"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center w-full ">
          <label htmlFor="" className="w-[240px]">
            メールアドレス
          </label>
          <input
            className="p-4 border border-gray-300 rounded w-full"
            type="text"
            id="name"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center w-full ">
          <label htmlFor="name" className="w-[240px]">
            本文
          </label>
          <textarea
            rows="8"
            className="p-4 border border-gray-300 rounded w-full"
            type="text"
            id="name"
            name="name"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
      <div className="flex justify-center gap-4 mt-12">
        <button className="rounded-lg bg-gray-800 text-white font-bold py-2 px-4">
          送信
        </button>
        <button className="rounded-lg bg-gray-300 font-bold py-2 px-4">
          クリア
        </button>
      </div>
    </div>
  );
};
