import React from 'react';

export default function ChatCard({ card: { userName, profilePicture, age, tagline, content, active } }) {
  return (
    <div className="w-full flex flex-col bg-white rounded-md shadow-md p-8 my-4 first:mt-2 last:mb-2 cursor-pointer"> 
      <div className="flex w-full h-14">
        <div className="rounded-full bg-active w-14 h-14 mr-6"></div>
        <div className="flex flex-col py-1">
          <p>{userName}</p>
          <p className="text-sm text-active">{tagline}</p>
        </div>
      </div>
      <div className="w-full h-full pt-4">
        <div className="w-full h-full">
          <p className="line-clamp-3">
            {content}
          </p>
        </div>
        <div className="w-8 h-full">

        </div>
      </div>
    </div>
  )
}
