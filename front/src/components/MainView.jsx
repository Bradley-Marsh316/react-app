import ChatMenu from './Chat/ChatMenu';
import ChatWindow from './Chat/ChatWindow/ChatWindow';

export default function MainView() {
  return (
    <div className="h-screen w-full bg-bg-2 p-12 flex">
      <div className="pr-20" style={{ width: '55rem' }}>
        <ChatMenu />
      </div>
      <ChatWindow />
    </div>
  )
}