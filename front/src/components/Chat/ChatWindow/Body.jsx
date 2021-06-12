import React from 'react';

import SentMessage from './Messages/SentMessage';
import RecievedMessage from './Messages/RecievedMessage';

const messages = [
  {
    type: 'sent',
    content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
  },
  {
    type: 'sent',
    content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
  },
  {
    type: 'recieved',
    content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
  },
  {
    type: 'sent',
    content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
  },
  {
    type: 'recieved',
    content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
  },
  {
    type: 'recieved',
    content: 'Lorem ipsum fdfdfdsfdsf ds f fdfdlksj huiehfdb feuf dslkjfh ewiulf hdskfh elukh fufh sdkfjlhseui fhuehakflhds '
  },
]

export default function Body() {
  return (
    <div className="w-full h-full py-8 px-12 bg-white shadow-md flex flex-col-reverse">
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
  )
}
