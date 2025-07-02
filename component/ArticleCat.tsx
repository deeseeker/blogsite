"use client";

import React from 'react';
import Card from './AllArticle/Cards';
import Image from 'next/image';

type Props = {
  cats: {
    id: number;
    image: string;
    category: string;
    title: string;
    desc: string;
    author: {
      name: string;
      avatar: string;
      date: string;
    };
  }[];
};

const ArticleCat = ({ cats }: Props) => {
  return (
    <div className="flex flex-wrap gap-6 mt-3 ">
  {cats.map(({ id, image, category, title, desc, author }) => (
    <Card
      key={id}
      className="w-full md:w-[50%] lg:w-[45%] p-0 overflow-hidden relative"
    >
      {/* Image */}
      <div className="relative w-full h-[380px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full rounded-[10px]"
        />

        {/* Dark Gradient Overlay + Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 text-white p-5 flex flex-col justify-between rounded-[15px]">
          <span className="bg-white text-[#FF9F43] w-fit px-3 py-1 text-sm rounded-full">
            {category}
          </span>

          <div>
            <h3 className="text-xl font-bold">{title}</h3>

            <div className="flex justify-between mt-2 gap-4">
              <p className="text-[13px] lg:text-[16px] text-gray-200 flex-2">{desc}</p>

              <div className="flex items-center gap-2 mt-4 flex-1">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-[10px] lg:text-[15px] font-medium">{author.name}</p>
                  <p className="text-[10px] lg:text-[15px] text-gray-300">{author.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  ))}
</div>

  );
};

export default ArticleCat;
