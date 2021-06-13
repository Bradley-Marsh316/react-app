import React from 'react';

import Avatar from '../../../assets/images/avatar.png';
import { ReactComponent as PaperClip } from '../../../assets/svg/paperclip.svg';
import { ReactComponent as ThreeDots } from '../../../assets/svg/threedots.svg';

export default function Header({ userName, tagline }) {
  return (
    <div className="w-full h-32 bg-bg-2 shadow-md mb-1 flex justify-between px-12">
      <div className="flex h-full items-center">
        <img src={Avatar} className="rounded-full bg-active w-16 h-16 mr-6" />
        <div className="flex flex-col h-full justify-center">
          <p className="text-lg font-bold">{userName}</p>
          <p className="text-sm text-active tracking-wider">{tagline}</p>
        </div>
      </div>
      <div className="flex h-full items-center">
      <div className="rounded-full shadow-lg bg-white hover:bg-bg-1 w-12 h-12 mr-8 flex justify-center items-center cursor-pointer transition-colors">
        <PaperClip />
      </div>
      <div className="rounded-full shadow-lg bg-white hover:bg-bg-1 w-12 h-12 flex justify-center items-center cursor-pointer transition-colors">
        <ThreeDots />
      </div>
      </div>
    </div>
  )
}
