import React, { useContext } from 'react';

import SentMessage from './Messages/SentMessage';
import RecievedMessage from './Messages/RecievedMessage';
import { Context } from '../../../store/Store';

export default function Body() {
  
  const [state, dispatch] = useContext(Context);

  const messages = state.messages[state.activeMessageIdx].messages

  return (
    <div className="w-full h-full max-h-full overflow-auto py-8 px-12 bg-white shadow-md">
      <div className="w-full h-full pr-4 flex flex-col-reverse scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-400 transition-all">
      {messages.map((message, i) => {
        const sameTypeAbove = i < messages.length - 1 ? messages[i + 1].type === message.type : false;
        
        switch (message.type) {
          case 'sent':
            return <SentMessage content={message.content} key={i} sameTypeAbove={sameTypeAbove} />
          case 'recieved':
            return <RecievedMessage content={message.content} key={i} sameTypeAbove={sameTypeAbove} />
        }
      })}
      </div>
    </div>
  )
}
