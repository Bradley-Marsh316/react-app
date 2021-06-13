import React from 'react';
import ChatView from './components/Chat/ChatView';
import Sidebar from './components/Sidebar';
import { Route, Switch } from 'react-router-dom';

import Store from './store/Store';

export default function App() {
  return (
    <Store>
      <div className="flex w-screen">
        <div className="w-72">
          <Sidebar />
        </div>
        <div className="w-full">
          <Switch>
            <Route path="/chat" component={ChatView} />
          </Switch>
        </div>
      </div>
    </Store>
  );
}
