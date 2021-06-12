import React from 'react';

import Header from './Header';
import Body from './Body';

export default function ChatWindow() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header userName="Bradley Marsh" tagline="last online 2 minutes" />
      <Body />
    </div>
  )
}
