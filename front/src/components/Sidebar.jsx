import React from 'react';

import Avatar from '../assets/images/avatar.png';
import { ReactComponent as ChevronDown } from '../assets/svg/chevron-down.svg';

import SidebarItem from './SidebarItem';

const sidebarItems = [
  {
    text: 'HOME',
    icon: 'home'
  },
  {
    text: 'CHAT',
    icon: 'chat'
  },
  {
    text: 'CONTACT',
    icon: 'person'
  },
  {
    text: 'NOTIFICATIONS',
    icon: 'bell'
  },
  {
    text: 'CALENDAR',
    icon: 'calendar'
  },
  {
    text: 'SETTINGS',
    icon: 'settings'
  }
];

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-white w-72 h-screen pt-20">
      <img src={Avatar} alt="User's Avatar" className="w-22 rounded-full h-auto mx-auto" />
      <div className="flex justify-center pt-4 pb-12">
        <h3 className="tracking-wide">Henry Jabbawockiez</h3>
        <ChevronDown className="pt-1 pl-2 transform scale-150 stroke-current" />
      </div>
      <div className="flex flex-col justify-between h-full font-semibold tracking-wide">
        <div>
          {sidebarItems.map((item, i) => {
            return (
              <SidebarItem key={i} item={item} />
            )
          })}
        </div>
        <SidebarItem item={{ text: 'LOG OUT', icon: 'power' }}/>
      </div>
    </div>
  )
};
