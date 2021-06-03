import ChatHeader from './ChatHeader';
import SearchBar from './SearchBar';
import ChatCard from './ChatCard';

const chatCards = [
  {
    userName: "Brad Marsh",
    tagline: "last online 2 minutes"
  },
  {
    userName: "Brad Marsh",
    tagline: "last online 2 minutes"
  },
  {
    userName: "Brad Marsh",
    tagline: "last online 2 minutes"
  },
]

export default function ChatMenu() {
  return (
    <div className="flex flex-col h-full w-full">
      <ChatHeader />
      <SearchBar />
      <div className="w-full pr-3 mt-4 max-h-full overflow-y-auto scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-400 transition-all">
        { chatCards.map(card => <ChatCard userName={card.userName} tagline={card.tagline} />) }
      </div>
    </div>
  )
}
