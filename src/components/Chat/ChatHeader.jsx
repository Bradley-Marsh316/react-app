import { ReactComponent as ChevronDown } from '../../assets/svg/chevron-down.svg';
import Button from '../Interactive/Button';

export default function ChatHeader() {
  return (
    <div className="flex justify-between w-full mb-6">
      <div className="flex flex-col">
        <h1 className="lg:text-4xl tracking-wide">Chats</h1>
        <div className="flex items-center mt-2 cursor-pointer">
          <h3 className="tracking-wide mr-1 font-light">Recent Chats</h3>
          <ChevronDown className="stroke-1 stroke-current"/>
        </div>
      </div>
      <div className="w-56 p-3">
        <Button text="Create New Chat" />
      </div>
    </div>
  )
}
