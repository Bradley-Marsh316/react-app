import Header from './Header';
import Body from './Body';

export default function ChatWindow() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <Body />
    </div>
  )
}
