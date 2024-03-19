import Image from 'next/image';
import React from 'react';

interface CardProps {
  size?: 'small' | 'medium' | 'large';
  label: string;
  content?: any
}

function omitString(str: string, num: number) {
  if (str.length <= num) return str
  return str = str.slice(0, num - 3) + '...'
}

export const Card = ({
  size = 'medium',
  label,
  content,
  ...props
}: CardProps) => {
  console.log(content);

  return (
    <div className="relative max-w-sm overflow-hidden bg-white border rounded-lg shadow-sm border-neutral-200/60">
      <Image src={content.img} className="relative object-cover w-full h-full" alt="pokemon image" />
      <div className=" z-50 flex items-center w-full mt-2  px-7">
        <a href="https://twitter.com/adamwathan" target="_blank" className="block mt-6">
          <h5 className="text-lg font-bold leading-none tracking-tight text-neutral-900">{content.channelName}</h5>
          <small className="block mt-1 text-sm font-medium leading-none text-neutral-500">@adamwathan</small>
        </a>
        <button className="absolute right-0 inline-flex items-center justify-center w-auto px-5 mt-6 text-sm font-medium transition-colors duration-100 rounded-full h-9 mr-7 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 bg-neutral-900 disabled:pointer-events-none hover:bg-neutral-800 text-neutral-100">
          <span>Follow</span>
        </button>
      </div>
      <div className="relative pb-6 p-7">
        <p className="mb-6 text-neutral-500 text-">{content.title}</p>
        <div className="flex items-center justify-between pr-2 text-neutral-500">
          <a href="https://twitter.com/adamwathan/following" target="_blank" className="text-sm hover:underline">views <strong className="text-neutral-800">{content.views}</strong> </a>
          <a href="https://twitter.com/adamwathan/followers" target="_blank" className="text-sm hover:underline">time <strong className="text-neutral-800">{content.time}</strong></a>
          <a href="https://twitter.com/adamwathan/followers" target="_blank" className="text-sm hover:underline">date <strong className="text-neutral-800">{content.postedTimeAgo}</strong></a>
        </div>
      </div>
    </div>
  );
};
