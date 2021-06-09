import React from 'react';

import { ReactComponent as Plus } from '../../assets/svg/plus.svg';

export default function Button({ text }) {
  return (
    <div className="flex w-full h-full rounded-md bg-gradient-to-br from-active-light to-active-dark justify-center items-center text-white text-md cursor-pointer font-light tracking-wider">
      <Plus />
      {text}
    </div>
  )
}
