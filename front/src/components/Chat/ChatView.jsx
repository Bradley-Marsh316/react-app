import React, { useContext } from 'react';

import { Context } from '../../store/Store';

import ChatMenu from './ChatMenu';
import ChatWindow from './ChatWindow/ChatWindow';

export default function MainView() {

  const [state, dispatch] = useContext(Context);

  return (
    <div className="h-screen w-full bg-bg-2 p-12 flex">
      <div className="pr-20" style={{ width: '40rem' }}>
        <ChatMenu />
      </div>
      <div className="w-full">
        { typeof state.activeMessageIdx === 'number' ? <ChatWindow /> : null}
      </div>
    </div>
  )
}