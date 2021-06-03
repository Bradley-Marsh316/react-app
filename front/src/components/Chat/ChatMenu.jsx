import ChatHeader from './ChatHeader';
import SearchBar from './SearchBar';
import ChatCard from './ChatCard';

const chatCards = [
  {
    userName: "Brad Marsh",
    tagline: "last online 2 minutes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa."
  },
  {
    userName: "Brad Marsh",
    tagline: "last online 2 minutes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa."
  },
  {
    userName: "Brad Marsh",
    tagline: "last online 2 minutes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa."
  },
  {
    userName: "Brad Marsh",
    tagline: "last online 2 minutes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa."
  },
  {
    userName: "Brad Marsh",
    tagline: "last online 2 minutes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl est, scelerisque eget ante id, congue condimentum urna. Vivamus hendrerit elit erat, id rutrum nulla pretium at. Nam auctor lorem eget metus consectetur, sit amet commodo ligula rutrum. Vestibulum pellentesque sed turpis ut ultrices. Donec egestas, velit nec aliquet ultrices, sem erat tempor mauris, eu placerat nunc neque ac odio. Nunc nulla enim, consectetur tempor libero et, tempor commodo nisi. Quisque sed magna non lectus aliquam efficitur ac et massa."
  },
]

export default function ChatMenu() {
  return (
    <div className="flex flex-col w-96 h-full" style={{ width: '34rem'}}>
      <ChatHeader />
      <SearchBar />
      <div className="w-full pr-3 mt-4 max-h-full overflow-y-auto scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-400 transition-all">
        { chatCards.map(card => <ChatCard card={card} />) }
      </div>
    </div>
  )
}
