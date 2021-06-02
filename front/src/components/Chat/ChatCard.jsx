export default function ChatCard({ userName, profilePicture, age, tagline, content, active }) {
  return (
    <div className="w-full h-60 flex flex-col bg-white rounded-md shadow-sm p-8 my-4"> 
      <div className="flex w-full h-14">
        <div className="rounded-full bg-active w-14 h-14 mr-6"></div>
        <div className="flex flex-col py-1">
          <p>{userName}</p>
          <p className="text-sm text-active">{tagline}</p>
        </div>
      </div>
    </div>
  )
}
