import React, { useContext } from 'react';

import { Context } from '../../store/Store';


import ChatHeader from './ChatHeader';
import SearchBar from './SearchBar';
import ChatCard from './ChatCard';


export default function ChatMenu() {

  const [state, dispatch] = useContext(Context);

  return (
    <div className="flex flex-col h-full w-full">
      <ChatHeader />
      <div className="h-28">
        <SearchBar />
      </div>
      <div className="w-full pr-3 mt-4 max-h-full overflow-y-auto scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-400 transition-all">
        { state.messages.map((card, i) => <ChatCard key={i} card={card} />) }
      </div>
    </div>
  )
}
