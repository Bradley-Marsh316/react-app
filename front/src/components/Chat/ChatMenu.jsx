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
    <div className="flex flex-col w-96" style={{ width: '34rem'}}>
      <ChatHeader />
      <SearchBar />
      <div className="w-full mt-4">
        { chatCards.map(card => <ChatCard userName={card.userName} tagline={card.tagline} />) }
      </div>
    </div>
  )
}
