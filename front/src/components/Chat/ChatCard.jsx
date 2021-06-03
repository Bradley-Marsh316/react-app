export default function ChatCard({ card: { userName, profilePicture, age, tagline, content, active } }) {
  return (
    <div className="w-full h-50 flex flex-col bg-white rounded-md shadow-sm p-8 my-4 first:mt-0 last:mb-0"> 
      <div className="flex w-full h-14">
        <div className="rounded-full bg-active w-14 h-14 mr-6"></div>
        <div className="flex flex-col py-1">
          <p>{userName}</p>
          <p className="text-sm text-active">{tagline}</p>
        </div>
      </div>
      <div className="w-full h-full pt-4">
        <div className="w-full h-full">
          <p className="line-clamp-3">
            {content}
          </p>
        </div>
        <div className="w-8 h-full">

        </div>
      </div>
    </div>
  )
}
