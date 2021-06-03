import { ReactComponent as ChevronDown } from '../../assets/svg/chevron-down.svg';

export default function SearchBar() {
  return (
    <div className="flex items-center w-full h-24 shadow-sm">
      <input type="text" className="h-full flex w-2/3 rounded-l-md focus:outline-none px-8" style={{ 'marginRight': '2px' }} placeholder="Search" />
      <div className="w-1/3 h-full bg-white rounded-r-md flex justify-center items-center text-gray-400 tracking-wide cursor-pointer">
        Messages
        <ChevronDown className="stroke-2 stroke-current"/>
      </div>
    </div>
  )
}
